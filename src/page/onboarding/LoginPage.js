import React from 'react';
import './LoginPage.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Hidden from '@material-ui/core/Hidden';

import Logo          from '../../components/Image/Logo';
import LogoText      from '../../components/Image/LogoText';
import DefaultButton from '../../components/Button/DefaultButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import RootContainer from '../../components/Container/RootContainer';

const useStyles = makeStyles((theme) => {
    const firaSansFont = 'Fira Sans, sans-serif';

    return {
        root: {
            margin: '0px auto',

            [theme.breakpoints.down('sm')]: {
                
            },
        },
        paper: {
            padding: theme.spacing(0),
            minHeight: '135vh',
            height: 'auto',
            width: '100%',
            textAlign: 'left',
            color: theme.palette.text.secondary,
            boxShadow: 'none',
            borderRadius: 0,
        },
        brandingPaper: {
            width: '100%',
            // background: 'url(people.png) #002058e0',
            background: 'url(people.png)',
            // background: 'url(people.png) #042f77d9',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'cover',
            // backgroundBlendMode: 'multiply',
            opacity: 1,
        },
        formPaper: {
            minHeight: '125vh',

            [theme.breakpoints.down('sm')]: {
                minHeight: '110vh',
            },
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
            display: 'flex',
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
        signupBtn: {
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
        pageActionWrapper: {
            marginTop: '135px',
            marginLeft: '95px',            

            [theme.breakpoints.down('md')]: {
                display: 'flex',
                justifyContent: 'center',
                marginLeft: '0px',
                marginTop: '100px',
                padding: '0px 20px',
            },

            [theme.breakpoints.down('sm')]: {
                marginTop: '50px',
            },
        },
        pageTitle: {
            fontFamily: firaSansFont,
            fontWeight: 'bold',
            fontSize: '38px',
            lineHeight: '130%',
            display: 'flex',
            alignItems: 'flex-end',
            color: '#002058',
            marginBottom: '5px',
        },
        pageInstruction: {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '140%',
            opacity: .4,
            marginBottom: '34px',
            maxWidth: '269px',
        },
        formWrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '520px',
            width: 'auto',
            padding: '10px',

            [theme.breakpoints.down('md')]: {
                display: 'block',
            },

            [theme.breakpoints.down('sm')]: {
                padding: '20px',
            },
        },
        formControl: {
            marginBottom: '29px',
            width: '100%',
            maxWidth: '520px',
        },
        inputLabel: {
            fontFamily: firaSansFont,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '17px',
            display: 'flex',
            alignItems: 'flex-end',
            color: '#041942',
            opacity: .3,
            marginBottom: '9px',
        },
        inputField: {
            background: 'rgba(207, 216, 234, 0.3)',
            minWidth: '200px',
            height: '65px',
            border: '1px solid #CFD8EA',
            borderRadius: '2px',
            color: '#152144',
            fontFamily: firaSansFont,
            fontSize: '18px !important',
            lineHeight: '22px',
            textTransform: 'capitalize',
            boxShadow: 'none',

            '&:hover': {
                border: '1px solid #152144',
            }
        },
        inputFocused: {
            color: '#152144',
            border: '1px solid #152144',
            boxShadow: 'none',
        },
        passwordInput: {
            letterSapcing: '5px',
        },
        textFieldLabel: {
            color: '#152144'
        },
        formButtonGridContainer: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '520px',
            flexGrow: 1,
            marginTop: '10px',

            [theme.breakpoints.down('sm')]: {
                maxWidth: '100%',
                flexDirection: 'row',
            },

            [theme.breakpoints.down('xs')]: {
                // flexDirection: 'column',
                // alignItems: 'flex-start',
            }
        },
        loginBtn: {
            minWidth: '180px',

            [theme.breakpoints.down('xs')]: {
                minWidth: '150px',
            }
        },
        forgetPasswordGrid: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',

            [theme.breakpoints.down('xs')]: {
                // justifyContent: 'flex-start',
            }
        },
        forgetPasswordBtn: {
            width: 'auto',
            padding: '0px',
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
                        <Hidden smDown>
                            <Paper className={clsx(classes.paper, classes.brandingPaper)}>
                                <div className={classes.overlay}></div>
                                <LogoText className={classes.logo} />

                                <Typography component="h2" className={clsx(classes.logo, classes.welcomeTextWrapper)}>
                                    <span className={clsx(classes.welcomeText, classes.welcomeTextFirstLine)}>Welcome to:</span>
                                    <strong className={clsx(classes.welcomeText, classes.welcomeTextSecondLine)}>SFS Capital</strong>
                                </Typography>
                            </Paper>
                        </Hidden>

                        <Hidden smUp>
                            <Logo className={classes.logo} />
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={clsx(classes.paper, classes.formPaper)}>
                            <Typography component="h2" className={classes.alreadyHaveAccount}>
                                <span className={classes.alreadyHaveAccountText}>Already have an account?</span>
                                <DefaultButton 
                                    label="Signup"
                                    className={classes.signupBtn}
                                    linkTo="/signup"
                                />
                            </Typography>

                            <div className={classes.pageActionWrapper}>
                                <form className={classes.formWrapper} autoComplete="off">
                                    <Typography component="h2" className={classes.pageTitle}>Login</Typography>
                                    <Typography component="p" className={clsx(classes.pageTitle, classes.pageInstruction)}>
                                        Sign in with your username or email and password
                                    </Typography>

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label id="username" className={classes.inputLabel}>Username:</label>
                                        <TextField
                                            id="username"
                                            label="Username"
                                            value=""
                                            fullWidth={true}
                                            placeholder=""
                                            variant="outlined"
                                            InputProps={{
                                                classes: {
                                                    root: classes.inputField,
                                                    focused: classes.inputFocused,
                                                    // input: classes.inputField,
                                                }
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                                classes: {
                                                    root: classes.textFieldLabel
                                                }
                                            }}
                                            onChange={() => {}}
                                        />
                                    </FormControl>

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label id="password" className={classes.inputLabel}>Password</label>
                                        <TextField
                                            id="password"
                                            type="password"
                                            label="Password"
                                            value="123456"
                                            fullWidth={true}
                                            placeholder=""
                                            variant="outlined"
                                            InputProps={{
                                                classes: {
                                                    root: clsx(classes.inputField, classes.passwordInput),
                                                    focused: classes.inputFocused,
                                                    // input: classes.inputField,
                                                }
                                            }}
                                            InputLabelProps={{
                                                shrink: false,
                                                classes: {
                                                    root: classes.textFieldLabel
                                                }
                                            }}
                                            onChange={() => {}}
                                        />
                                    </FormControl>

                                    <div className={clsx(classes.formControl, classes.formButtonGridContainer)}>
                                        <PrimaryButton 
                                            className={classes.loginBtn} 
                                            label="Login"
                                        />
                                        <div className={classes.forgetPasswordGrid}>
                                            <DefaultButton 
                                                className={classes.forgetPasswordBtn}
                                                label="Forget password?" 
                                                linkTo=""
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>                    
                        </Paper>
                    </Grid>
                </Grid>
            </RootContainer>
        </div>
    );
}

export default LoginPage;