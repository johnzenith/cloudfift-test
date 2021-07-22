import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DefaultButton from '../../Button/DefaultButton';

const useStyles = makeStyles((theme) => {
    const firaSansFont = 'Fira Sans, sans-serif';

    return {
        alreadyHaveAccount: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '54px',

            [theme.breakpoints.down('sm')]: {
                padding: '0px 10px',
            },

            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            }
        },
        alreadyHaveAccountText: {
            fontFamily: firaSansFont,
            fontSize: '16px',
            opacity: .5,
            color: '#002058',
            fontWeight: 600,
            lineHeight: '19px',

            [theme.breakpoints.down('xs')]: {
                marginBottom: '10px',
            }
        },
        alreadyHaveAnAccountBtn: {
            width: '145px',
            height: '45px',
            background: '#fff',
            color: '#182538',
            boxShadow: '0px 5px 20px rgba(24, 37, 56, 0.1)',
            fontFamily: firaSansFont,
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '16.8px',
            textAlign: 'center',
            textTransform: 'capitalize',
            marginLeft: '23px',

            '&:hover': {
                background: '#fff',
                color: '#182538',
            },

            [theme.breakpoints.down('sm')]: {
                width: '130px',
            },

            [theme.breakpoints.down('xs')]: {
                marginLeft: '0px',
            }
        },
    };
});

const AlreadyHaveAnAccount = ({ 
    label                = "Don't have an account?",
    className: elemClass = '',

    buttonProps = {
        label:    '',
        linkTo:    '',
        className: '',
    }
}) => {
    const classes = useStyles();

    return (
        <Typography component="h2" className={clsx(classes.alreadyHaveAccount, elemClass)}>
            <span className={classes.alreadyHaveAccountText}>
                {label || "Don't have an account?"}
            </span>

            <DefaultButton 
                label={buttonProps.label}
                className={clsx(classes.alreadyHaveAnAccountBtn, buttonProps.className)}
                linkTo={buttonProps.linkTo}
            />
        </Typography>
    );
};

export default AlreadyHaveAnAccount;