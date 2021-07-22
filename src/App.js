import React from 'react';
import './App.css';
import { useStateValue }  from './context/StateProvider';

import LandingPage        from './page/LandingPage';

import LoginPage          from './page/onboarding/LoginPage';
import SignupPage         from './page/onboarding/SignupPage';
import ForgotPasswordPage from './page/onboarding/ForgotPasswordPage';

import Dashboard          from './page/dashboard';

import {
    BrowserRouter as Router, 
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';

function App() {
    const [{ user }] = useStateValue();

    const GlobalRoutes = () => (
        <Switch>
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/signup"          component={SignupPage} />
            <Route exact path="/login"           component={LoginPage} />
            <Route exact path="/"                component={LandingPage} />
            <Route
                render={() => <Redirect to="/" />}
              />
        </Switch>
    );

    return (
        <div className="app">
            <Router>
                {!user ? 
                    (<GlobalRoutes />)
                    : 
                    (<div className="app__dashboard">
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />

                            <Route render={() => <Redirect to="/dashboard" />} />
                        </Switch>
                    </div>)
                }
            </Router>
        </div>
    );
}

export default React.memo(App);
