import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Dashboard from '../pages/Dashboard';
import LanguageTest from '../pages/LanguageTest';
import TestResult from '../pages/TestResult';

const useStyles = makeStyles((theme) => ({
    appContainer: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        position: 'sticky',
        overflowY: 'scroll',
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
}));

const App = () => {
    const classes = useStyles();
    return(
        <div className={classes.appContainer}>
            <Header />
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
                <Route exact path="/language-test" component={LanguageTest} />
                <Route exact path="/test-result" component={TestResult} />
            </Switch>
        </div>
    );
};

export default App;
