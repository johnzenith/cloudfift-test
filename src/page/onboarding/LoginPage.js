import React          from 'react';
import clsx           from 'clsx';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Components
import TextInput            from '../../components/Input/TextInput';
import DefaultButton        from '../../components/Button/DefaultButton';
import PrimaryButton        from '../../components/Button/PrimaryButton';
import RootContainer        from '../../components/Container/RootContainer';
import PageTitle            from '../../components/Template/Onboarding/PageTitle';
import PageOverlayGrid      from '../../components/Template/Onboarding/PageOverlayGrid';
import AlreadyHaveAnAccount from '../../components/Template/Onboarding/AlreadyHaveAnAccount';

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: '0px auto',
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
        passwordInput: {
            letterSpacing: '5px',
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
        },
        forgetPasswordBtn: {
            width: 'auto',
            padding: '0px',
        },
    }
});

const LoginPage = () => {
    const classes = useStyles();

    const usernameInputRef = React.createRef('');
    const passwordInputRef = React.createRef('');

    // Maybe we should not validate on page load when value is auto-filled,
    // until the form is submitted
    const [errorDisplay, setErrorDisplay] = React.useState(false);

    const handleSubmit = () => {
        setErrorDisplay(true);
    };

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

                                    <TextInput
                                        id="username"
                                        label="Username:"
                                        labelPlaceholder="Username"
                                        type="email"
                                        required={true}
                                        inputRef={usernameInputRef}
                                        errorDisplay={errorDisplay}
                                        validate={{
                                            validateOnLoad: false,
                                            error: {
                                                invalid: 'Username is invalid.',
                                            }
                                        }}
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        label="Password"
                                        required={true}
                                        inputRef={passwordInputRef}
                                        errorDisplay={errorDisplay}
                                        minlength={8}
                                        maxlength={90}
                                    />

                                    <div className={clsx(classes.formControl, classes.formButtonGridContainer)}>
                                        <PrimaryButton 
                                            className={classes.loginBtn} 
                                            label="Login"
                                            onClick={handleSubmit}
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