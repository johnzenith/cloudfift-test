import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

/**
 * Accepts two props:
 * 
 * @prop children
 * @prop className
 */
const RootContainer = props => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, props?.className || '')}>
            {props.children}
        </div>
    );
}

export default RootContainer;