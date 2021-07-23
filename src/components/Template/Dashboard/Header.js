import React          from 'react';
import AppBar         from '@material-ui/core/AppBar';
import IconButton     from '@material-ui/core/IconButton';
import MenuIcon       from '@material-ui/icons/Menu';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Constants
import { DASHBOARD_DRAWER } from '../../../config/constants';

const drawerWidth = DASHBOARD_DRAWER.width;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),

        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

const Header = props => {
    const classes = useStyles();
    const {
        label = 'label',
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
                <Typography variant="h6" noWrap>
                    {label}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;