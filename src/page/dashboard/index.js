import React          from 'react';
import Typography     from '@material-ui/core/Typography';
import Hidden         from '@material-ui/core/Hidden';
// import Paper    from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Constants
import { 
    FONT_FAMILY,
    DASHBOARD_DRAWER,
    CURRENCY_SYMBOLS
} from '../../config/constants';

// Components
import Card          from '../../components/Template/Dashboard/Card';
import Sidebar       from '../../components/Template/Dashboard/Sidebar';
import Drawer        from '../../components/Template/Dashboard/Drawer';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Header, {
    AccountSetupActionBtn
} from '../../components/Template/Dashboard/Header';

const drawerWidth  = DASHBOARD_DRAWER.width;
const drawerHeight = DASHBOARD_DRAWER.height;
const firaSansFont = FONT_FAMILY.firaSans;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        display: 'block',
        flexGrow: 1,
        marginTop: `${drawerHeight}px`,
        padding: '0px 80px',
        background: '#fff',

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
        },

        [theme.breakpoints.down('sm')]: {
            padding: '0px 25px',
        }
    },
    welcome: {
        display: 'flex',
        alignItems: 'flex-end',
        fontFamily: firaSansFont,
        fontWeight: 600,
        fontSize: '34px',
        lineHeight: '41px',
        color: '#002058',

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginBottom: '10px',
        }
    },
    investNowBtnGridItem: {
        display: 'flex',
        justifyContent: 'flex-end',

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginBottom: '50px',
        }
    },
    investNowBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'auto',
        minWidth: '203px',
        height: '70px',
        padding: '0px 20px',
        background: '#F2994A',
        border: '1px solid #F2F2F2',
        borderRadius: '4px',
        boxShadow: 'none',
        color: '#fff',
        lineHeight: '22px',

        '&:hover': {
            background: '#F2994A',
            border: '1px solid #F2F2F2',
        }
    },
    investNowBtnTextWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
    },
    investNowBtnText: {
        flexGrow: 1,
        fontFamily: firaSansFont,
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'left',
    },
    investNowBtnIcon: {
        width: '30px',
        height: '30px',
        background: '#fde0c561',
        padding: '7px',
        borderRadius: '100%',
    },
    amountSymbol: {
        fontWeight: 300,
    },
    cardWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    totalEarnedPaper: {
        background: '#0B638D',

        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        }
    },
    totalPayoffPaper: {
        background: '#B2B7BC',

        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        }
    },
    accountSetupBtn: {
        marginTop: '30px',
        marginBottom: '0px',

        [theme.breakpoints.down('sm')]: {
            padding: '8px 20px',
            borderRadius: '4px',
            textAlign: 'left',
        }
    }
}));

function DashboardPage(props) {
    const { window } = props;
    const classes    = useStyles();
    const [
        mobileOpen, 
        setMobileOpen
    ] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const AmountText = ({ amount = 0 }) => (
        <React.Fragment>
            <span className={classes.amountSymbol}>
                {`${CURRENCY_SYMBOLS.naira}`}
            </span>
            {amount}
        </React.Fragment>
    );

    return (
        <div className={classes.root}>
            <Sidebar 
                window={window}
                Header={Header}
                DashboardDrawer={Drawer}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            
            <main className={classes.content}>
                <Hidden mdUp>
                    <AccountSetupActionBtn className={classes.accountSetupBtn} />          
                </Hidden>

                <Grid container spacing={0} style={{marginTop: '54px', marginBottom: '40px'}}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography component="h2" className={classes.welcome}>
                            Hi, Welcome
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className={classes.investNowBtnGridItem}>
                        <PrimaryButton 
                            label={
                                <Typography className={classes.investNowBtnTextWrapper}>
                                    <span className={classes.investNowBtnText}>Invest Now</span>
                                    <img src="icons/invest-now.svg" alt="invest-now" className={classes.investNowBtnIcon} />
                                </Typography>
                            }
                            className={classes.investNowBtn}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className={classes.cardWrapper}>
                            <Card 
                                label="Total Invested"
                                amount={<AmountText amount='35, 001,500.00' />}
                                description="from 15 investment plans"
                            />
                            <Card 
                                classes={{
                                    paper: classes.totalEarnedPaper
                                }}
                                label="Total Earned"
                                amount={<AmountText amount='1, 120,500.00' />}
                                description=""
                            />
                            <Card 
                                classes={{
                                    paper: classes.totalPayoffPaper
                                }}
                                label="Total Payoff"
                                amount={<AmountText amount='501,500.00' />}
                                description=""
                            />
                        </div>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default DashboardPage;
