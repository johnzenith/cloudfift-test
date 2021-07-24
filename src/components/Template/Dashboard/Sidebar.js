import React        from 'react';
import Drawer       from '@material-ui/core/Drawer';
import Hidden       from '@material-ui/core/Hidden';
import CssBaseline  from '@material-ui/core/CssBaseline';
import { 
    makeStyles, 
    useTheme
} from '@material-ui/core/styles';

// Constants
import { DASHBOARD_DRAWER } from '../../../config/constants';

const drawerWidth = DASHBOARD_DRAWER.width;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
        background: '#152144',
    },
}));

const Sidebar = props => {
    const classes = useStyles();
    const theme   = useTheme();

    const {
        window,
        Header,
        mobileOpen,
        DashboardDrawer,
        handleDrawerToggle = (() => {}),
    } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} />
            
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <DashboardDrawer />
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <DashboardDrawer />
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default Sidebar;
