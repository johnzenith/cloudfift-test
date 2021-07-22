import React          from 'react';
import clsx           from 'clsx';
import Paper          from '@material-ui/core/Paper';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { useStyles as loginPageStyles } from './LoginPage';

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
        paper: {
            minHeight: '145vh',
        },
        formPaper: {
            minHeight: '135vh',

            [theme.breakpoints.down('sm')]: {
                minHeight: '160vh',
            },
        },
        overlay: {
            minHeight: '145vh',
        },
        pageDescription: {
            maxWidth: '347px',
        },
        pageActionWrapper: {
            marginTop: '90px',
        },
        loginBtn: {
            
        },
        forgetPasswordGrid: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
        },
        forgetPasswordBtn: {
            width: 'auto',
            padding: '0px',
            color: '#F9A825',
        },
    }
});

const LoginPage = () => {
    const classes     = loginPageStyles();
    const pageClasses = useStyles();

    const lastNameInputRef  = React.createRef('');
    const firstNameInputRef = React.createRef('');
    const emailInputRef     = React.createRef('');
    const passwordInputRef  = React.createRef('');

    // Maybe we should not validate on page load when value is auto-filled,
    // until the form is submitted
    const [errorDisplay, setErrorDisplay] = React.useState(false);

    const handleSubmit = () => {
        setErrorDisplay(true);
    };

    return (
        <div className="signupPage">
            <RootContainer className={classes.root}>
                <Grid container spacing={0}>
                    <PageOverlayGrid 
                        paper={{
                            className: pageClasses.paper
                        }}
                        overlay={{
                            className: pageClasses.overlay
                        }}
                    />

                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={clsx(classes.paper, classes.formPaper, pageClasses.formPaper)}>
                            <AlreadyHaveAnAccount 
                                label="Already have an account?"
                                buttonProps={{
                                    label:  'Login',
                                    linkTo: '/login',
                                }}
                            />

                            <div className={clsx(classes.pageActionWrapper, pageClasses.pageActionWrapper)}>
                                <form className={classes.formWrapper}>
                                    <PageTitle
                                        label="Create an account"
                                        pageDescription={{
                                            label: 'Lets onboard you so we will know who you are. it will only take a minute',
                                            className: pageClasses.pageDescription,
                                        }}
                                    />

                                    <TextInput
                                        id="firstName"
                                        label="First Name"
                                        required={true}
                                        inputRef={firstNameInputRef}
                                        errorDisplay={errorDisplay}
                                    />

                                    <TextInput
                                        id="lastName"
                                        label="Last Name"
                                        required={true}
                                        inputRef={lastNameInputRef}
                                        errorDisplay={errorDisplay}
                                    />

                                    <TextInput
                                        id="email"
                                        label="Email"
                                        type="email"
                                        required={true}
                                        inputRef={emailInputRef}
                                        errorDisplay={errorDisplay}
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
                                        <div className={clsx(classes.forgetPasswordGrid, pageClasses.forgetPasswordGrid)}>
                                            <DefaultButton 
                                                className={clsx(classes.forgetPasswordBtn, pageClasses.forgetPasswordBtn)}
                                                label="« Previous" 
                                                linkTo="/login"
                                            />
                                        </div>

                                        <PrimaryButton 
                                            className={clsx(classes.loginBtn, pageClasses.loginBtn)} 
                                            label="Signup"
                                            onClick={handleSubmit}
                                        />
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