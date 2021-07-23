import React       from 'react';
import Typography  from '@material-ui/core/Typography';
import { 
    makeStyles
} from '@material-ui/core/styles';

// Components
import Header  from '../../components/Template/Dashboard/Header';
import Drawer  from '../../components/Template/Dashboard/Drawer';
import Sidebar from '../../components/Template/Dashboard/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
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
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
            </main>
        </div>
    );
}

export default DashboardPage;
