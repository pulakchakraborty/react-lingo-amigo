import React, { Fragment } from 'react';
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

const Dashboard = ({ wordBank, growWordBank, deleteWord, onStartTest }) => {
    const classes = useStyles();

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
