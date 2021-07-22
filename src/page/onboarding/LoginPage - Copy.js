import React from 'react';
import logo from '../../images/logo.svg';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Hidden from '@material-ui/core/Hidden';

import RootContainer from '../../components/Container/RootContainer';


const useStyles = makeStyles((theme) => {
    
    return {
        root: {
            margin: '0px auto',

            [theme.breakpoints.down('sm')]: {
                
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            boxShadow: 'none',
        },
    }
});

const LoginPage = () => {
    const classes = useStyles();

    return (
        <div className="loginPage">
            <RootContainer className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6}>
                        {8}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        {8}
                    </Grid>
                </Grid>
            </RootContainer>
        </div>
    );
}

export default LoginPage;