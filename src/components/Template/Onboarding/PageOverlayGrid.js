import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Hidden from '@material-ui/core/Hidden';

import Logo     from '../../Image/Logo';
import LogoText from '../../Image/LogoText';

export const usePaperStyleProps = theme => ({
    padding: theme.spacing(0),
    minHeight: '135vh',
    height: 'auto',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: 0,
});

const useStyles = makeStyles((theme) => {
    const firaSansFont = 'Fira Sans, sans-serif';

    return {
        paper: usePaperStyleProps(theme),
        brandingPaper: {
            width: '100%',
            background: 'url(people.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            objectFit: 'cover',
            opacity: 1,
        },
        overlay: {
            content: '" "',
            position: 'absolute',
            left: '-7px',
            right: 0,
            top: 0,
            bottom: 0,
            width: '50vw',
            minHeight: '135vh',
            background: '#002058',
            opacity: .8,
        },
        link: {
            textDecoration: 'none',
        },
        logo: {
            position: 'absolute',
            top: '47px',
            left: '78px',
            zIndex: 9999,
            
            [theme.breakpoints.down('sm')]: {
                position: 'relative',
                top: '20px',
                left: '20px',
            },
        },
        welcomeTextWrapper: {
            top: '55vh',
        },
        welcomeText: {
            color: '#fff',
            display: 'block',
            fontFamily: firaSansFont,
        },
        welcomeTextFirstLine: {
            fontSize: '28px',
            lineHeight: '130%',
            opacity: .7,
        },
        welcomeTextSecondLine: {
            fontSize: '50px',
            fontWeight: 'bold',
        },
    }
});

const PageOverlayGrid = ({ paper = {}, overlay = {} }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={6}>
            <Hidden smDown>
                <Paper className={clsx(classes.paper, classes.brandingPaper, paper?.className || '')}>
                    <div className={clsx(classes.overlay, overlay?.className || '')}></div>
                    
                    <Link to="/" className={classes.link}>
                        <LogoText className={classes.logo} />
                    </Link>

                    <Typography component="h2" className={clsx(classes.logo, classes.welcomeTextWrapper)}>
                        <span className={clsx(classes.welcomeText, classes.welcomeTextFirstLine)}>Welcome to:</span>
                        <strong className={clsx(classes.welcomeText, classes.welcomeTextSecondLine)}>SFS Capital</strong>
                    </Typography>
                </Paper>
            </Hidden>

            <Hidden mdUp>
                <Logo className={classes.logo} />
            </Hidden>
        </Grid>
    );
};

export default PageOverlayGrid;