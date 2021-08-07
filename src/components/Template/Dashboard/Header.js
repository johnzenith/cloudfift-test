import React          from 'react';
import clsx           from 'clsx';
import AppBar         from '@material-ui/core/AppBar';
import Hidden         from '@material-ui/core/Hidden';
import IconButton     from '@material-ui/core/IconButton';
import MenuIcon       from '@material-ui/icons/Menu';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Constants
import {
    FONT_FAMILY,
    DASHBOARD_DRAWER
} from '../../../config/constants';

// Components
import PrimaryButton from '../../Button/PrimaryButton';

const drawerWidth  = DASHBOARD_DRAWER.width;
const drawerHeight = DASHBOARD_DRAWER.height;
const firaSansFont = FONT_FAMILY.firaSans;

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        height: `${drawerHeight}px`,

        '&::after': {
            content: '" "',
            display: 'block',
            width: '100vw',
            marginTop: '20px',
            marginLeft: '40px',
            height: '0px',
            opacity: 0.2,
            borderBottom: '1.8px solid #B2B7BC',

            [theme.breakpoints.down('md')]: {
                marginLeft: '0px',
            }
        },

        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginTop: '20px',
        marginRight: theme.spacing(2),
        color: '#152144',

        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    completeAccountBtn: {
        width: 'auto',
        height: 'auto',
        // marginTop: '26px',
        boxShadow: 'none',
        borderRadius: '55px',
        padding: '8px 45px',
        fontFamily: firaSansFont,
        fontSize: '14px',
        // lineHeight: '0px',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        background: '#F9A825',
        color: '#fff',
        textTransform: 'lowercase',

        [theme.breakpoints.only('md')]: {
            padding: '8px 12px',
        },

        '&:hover': {
            background: '#F9A825',
            color: '#fff',
        }
    },
    alertContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: `${drawerHeight}px`,
        marginTop: '20px',
        padding: '0px 30px',
    },
    avatarWrapper: {
        justifyContent: 'flex-end',
    },
    avatar: {
        marginRight: '15px',
    },
    fullName: {
        color: '#152144',
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '17px',
        cursor: 'pointer',
    },
    arrowDown: {
        marginLeft: '5px',
    }
}));

export const AccountSetupActionBtn = props => {
    const classes = useStyles();

    return (
        <PrimaryButton
            label='Hi Andie! you are yet to complete your account setup'
            className={clsx(classes.completeAccountBtn, props?.className || '')}
        />
    );
};

const Header = props => {
    const classes = useStyles();
    const {
        handleDrawerToggle = (() => {}),
    } = props;

    return (
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <div className={classes.alertContainer}>
                            <Hidden smDown>
                                <AccountSetupActionBtn />          
                            </Hidden>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={clsx(classes.alertContainer, classes.avatarWrapper)}>
                            <img src="user.png" className={classes.avatar} alt="avatar" />
                            <Typography component="h4" className={classes.fullName}>
                                Andie Kane
                                <img src="arrow-down.svg" alt="arrow-down" className={classes.arrowDown} />
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;