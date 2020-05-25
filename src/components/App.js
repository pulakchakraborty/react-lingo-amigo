import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Dashboard from '../pages/Dashboard';
import LanguageTest from '../pages/LanguageTest';
import TestResult from '../pages/TestResult';
import { initialData } from '../assets/initialData';

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
    console.log(`initial app data: ${initialData}`);
    const classes = useStyles();
    const history = useHistory();
    const [ wordBank, setWordBank ] = useState([...initialData]);

    /* This function adds a new pair of words in the word-list */
    const growWordBank = ({ english, german }) => {
        console.log(`data Dashboard: ${english} : ${german}`);
        setWordBank([...wordBank, { english, german }]);
        console.log(`data Dashboard: ${wordBank}`);
    };

    /* This function removes a specific pair of words from the word-list */
    const deleteWord = (index) => {
        const temp = [...wordBank];
        temp.splice(index, 1);
        setWordBank(temp);
    };

    /* This function handles the randomization of wordlist and redirecting
        the user to /language-test route when the test starts
    */
    const onStartTest = () => {
        if (wordBank.length > 19)   // Change the hardcoded value in future
        {
            let shuffledWordBank = [...wordBank]
                .sort(() => 0.5 - Math.random())
                .slice(0, 20);      // change the hardcoded value in future
            history.push('/language-test', { selectedWordBank: [...shuffledWordBank] });
        }
    };

    return(
        <div className={classes.appContainer}>
            <Header />
            <Switch>
                <Route exact path="/dashboard"
                        render={(props) =>
                            <Dashboard {...props}
                                wordBank={wordBank}
                                growWordBank={growWordBank}
                                deleteWord={deleteWord}
                                onStartTest={onStartTest}
                            />
                        }
                />
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
