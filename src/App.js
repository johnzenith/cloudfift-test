import React from 'react';
import './App.css';
import { useStateValue } from './context/StateProvider';
import SignUpForm from './components/form/SignUpForm';
import LoginForm from './components/form/LoginForm';
import HomeScreen from './page/HomeScreen';
import Dashboard from './page/Dashboard';
import ForgotPasswordForm from './components/form/ForgotPasswordForm';

import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';

function App() {
    const [{ user }] = useStateValue();

    const DisplayUserForm = () => (
        <Switch>
            <Route exact path="/forgot-password" component={ForgotPasswordForm} />
            <Route exact path="/signup"          component={SignUpForm} />
            <Route exact path="/login"           component={LoginForm} />
            <Route exact path="/"                component={HomeScreen} />
            <Route
                render={() => <Redirect to="/" />}
              />
        </Switch>
    );

    return (
        <div className="app">
            <Router>
                {!user ? 
                    (<DisplayUserForm />)
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
