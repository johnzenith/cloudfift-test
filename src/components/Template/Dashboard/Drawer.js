import React          from 'react';
import clsx           from 'clsx';
// import Divider        from '@material-ui/core/Divider';
import List           from '@material-ui/core/List';
import ListItem       from '@material-ui/core/ListItem';
import ListItemIcon   from '@material-ui/core/ListItemIcon';
import ListItemText   from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

// Constants
import { FONT_FAMILY }      from '../../../config/constants';
import { DASHBOARD_DRAWER } from '../../../config/constants';

// Components
import Logo         from '../../Image/Logo';
import objectHelper from '../../../helpers/objectHelper';

const drawerWidth  = DASHBOARD_DRAWER.width;
const firaSansFont = FONT_FAMILY.firaSans;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    logo: {
        marginLeft: '63px',
        marginTop: '21px',
    },
    spaceBar: {
        marginTop: '90px',
    },
    icon: {
        display: 'block',
        marginLeft: '30px',
        marginRight: '29px',
        backgroundSize: 'cover',
        objectSize: 'cover',
        opacity: 0.6,

        '&:hover': {
            opacity: 1,
        }
    },
    iconActive: {
        opacity: 0.9,
    },
    listItem: {
        marginBottom: '22px',
    },
    listItemActive: {
        marginBottom: '32px',
    },
    listItemIcon: {
        width: '80px',
        marginLeft: '5px',
    },
    listItemText: {
        fontFamily: firaSansFont,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#fff',
        opacity: 0.6,

        '&:hover': {
            opacity: 0.9,
        }
    },
    listItemTextActive: {
        opacity: 1,
    }
}));

const Drawer = ({
    showLogo         = true,
    listItems        = DASHBOARD_DRAWER.listItems,
    selectedListItem = 0,
    drawerClasses    = {
        root:         '',
        list:         '',
        listItem:     '',
        listItemImg:  '',
        listItemIcon: '',
        listItemText: '',
    }
}) => {
    const classes       = useStyles();
    const listItemsKeys = objectHelper.getKeys(listItems);

    const getListItemData = (key, index) => {
        const listItem = objectHelper.getValue(listItems, key);

        const label    = listItem?.label;
        const iconData = listItem?.icon; // URL to image or React Element.

        const icon = objectHelper.isEmpty(iconData) ? 
            {iconData} 
            : 
            <img 
                src={iconData?.url || ''} 
                alt={label} 
                className={clsx(
                    classes.icon,
                    drawerClasses.listItemImg,
                    {[classes.iconActive]: (selectedListItem === index)},
                )}
            />;

        return {
            icon,
            label,
        };
    };

    return (
        <div className={drawerClasses.root}>
            {showLogo ? <Logo className={classes.logo} /> : ''}
            <div className={classes.spaceBar} />          
            <List className={drawerClasses.list}>
                {listItemsKeys.map((key, index) => {
                    const listData         = getListItemData(key, index);
                    const isListItemActive = selectedListItem === index;

                    return (
                        <ListItem 
                            button 
                            key={key} 
                            className={clsx(
                                classes.listItem,
                                drawerClasses.listItem,
                                {[classes.listItemActive]: isListItemActive},
                            )}
                        >
                            <ListItemIcon className={clsx(classes.listItemIcon, drawerClasses.listItemIcon)}>
                                {listData.icon}
                            </ListItemIcon>
                            <ListItemText 
                                primary={listData.label} 
                                classes={{
                                    primary: clsx(
                                        classes.listItemText,
                                        drawerClasses.listItemText,
                                        {[classes.listItemTextActive]: isListItemActive}
                                    )
                                }}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
    
}

export default Drawer;
