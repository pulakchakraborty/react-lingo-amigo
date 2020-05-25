import React, { Fragment } from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Typography } from '@material-ui/core';
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
            <Grid item sm={12} md={12} xs={12}>
                <Typography variant="h4" color={'secondary'} className={classes.brandName} >
                    L i n g o A m i g o
                </Typography>
                <Typography variant="h5" color={'primary'} className={classes.welcomeText} >
                    Scale up your vocabulary faster and smarter with our app
                </Typography>
            </Grid>
            <FormInput growWordBank={growWordBank} />
            <WordList wordBank={wordBank} deleteWord={deleteWord} />
            <Grid className={classes.fabContainer} item xs={12} sm={12} md={12}>
                <Fab variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="edit"
                    onClick={onStartTest}
                >
                    <EditIcon />
                    Take a Test
                </Fab>
            </Grid>
         </Fragment>
    );
};

export default Dashboard;
