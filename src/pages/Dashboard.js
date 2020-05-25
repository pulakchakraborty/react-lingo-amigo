import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FormInput from '../components/FormInput';
import WordList from '../components/WordList';

const useStyles = makeStyles((theme) => ({
    fabContainer: {
      flexGrow: 1,
      textAlign: 'center',
      margin: theme.spacing(2),
    },
    brandName: {
        margin: theme.spacing(2, 2, 0),
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    welcomeText: {
        margin: theme.spacing(0, 2, 2),
        textAlign: 'center',
        //padding: theme.spacing(2),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();
    const [ wordBank, setWordBank ] = useState([]);

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
        <Fragment>
             <FormInput growWordBank={growWordBank} />
             <WordList wordBank={wordBank} deleteWord={deleteWord} />
             <Container className={classes.fabContainer} xs={12} sm={9} md={6}>
                <Fab variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="edit"
                    onClick={onStartTest}
                >
                    <EditIcon />
                    Take a Test
                </Fab>
            </Container>
         </Fragment>
    );
};

export default Dashboard;
