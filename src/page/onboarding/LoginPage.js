import React          from 'react';
import clsx           from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';

import TextField      from '@material-ui/core/TextField';
import FormControl    from '@material-ui/core/FormControl';

// Components
import DefaultButton        from '../../components/Button/DefaultButton';
import PrimaryButton        from '../../components/Button/PrimaryButton';
import RootContainer        from '../../components/Container/RootContainer';
import PageTitle            from '../../components/Template/Onboarding/PageTitle';
import PageOverlayGrid      from '../../components/Template/Onboarding/PageOverlayGrid';
import AlreadyHaveAnAccount from '../../components/Template/Onboarding/AlreadyHaveAnAccount';

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
        formPaper: {
            minHeight: '125vh',

            [theme.breakpoints.down('sm')]: {
                minHeight: '110vh',
            },
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
                    <PageOverlayGrid />

                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={clsx(classes.paper, classes.formPaper)}>
                            <AlreadyHaveAnAccount 
                                buttonProps={{
                                    label:  'Signup',
                                    linkTo: '/signup',
                                }}
                            />

                            <div className={classes.pageActionWrapper}>
                                <form className={classes.formWrapper} autoComplete="off">
                                    <PageTitle
                                        label="Login"
                                        pageDescription={{
                                            label: 'Sign in with your username or email and password'
                                        }}
                                    />

                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <label htmlFor="username" className={classes.inputLabel}>Username:</label>
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
                                        <label htmlFor="password" className={classes.inputLabel}>Password</label>
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