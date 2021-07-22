import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    title: {
        display: 'block',
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: '40px',
        fontWeight: 900,
        lineHeight: '47px',
    },
    logoSecondTitle: {
        fontSize: '20px',
        lineHeight: '23px',
        fontWeight: 'normal',
    }
}));

const LogoText = props => {
    const classes = useStyles();

    return (
        <Typography component="h3" className={props?.className || ''}>                                        
            <span className={clsx(classes.title, classes.logoFirstTitle)}>SFS</span>
            <span className={clsx(classes.title, classes.logoSecondTitle)}>Capital</span>
        </Typography>
    );
};

export default LogoText;