import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import PrimaryButton from './PrimaryButton';

const useStyles = makeStyles(() => ({
    defaultBtnStyle: {
        background: '#fff',
        boxShadow: 'none',
        color: '#002058',
        justifyContent: 'center',

        '&:hover': {
            background: 'transparent',
            boxShadow: 'none',
        }
    }
}));

const DefaultButton = props => {
    const classes = useStyles();

    return <PrimaryButton 
        label={props?.label}
        className={clsx(classes.defaultBtnStyle, props.className)}
        onClick={props?.onClick}
        linkTo={props?.linkTo}
    />;
}

export default DefaultButton;