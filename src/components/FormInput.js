import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
    },
    buttonContainer: {
        margin: theme.spacing(2),
    }
}));

const FormInput = ({ growWordBank }) => {
    const classes = useStyles();

    const [ wordPair, setWordPair ] = useState({
        english: '',
        german: ''
    });

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        // Reset the text input field after each addition to wordbook
        const tempWordPair = {...wordPair};
        setWordPair({...wordPair, english: '', german: ''});
        growWordBank(tempWordPair);
    }

    return(
        <Grid container spacing={3} justify={"center"}>
            <Grid item sm={9} md={6} xs={12}>
                <Paper className={classes.paper}>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            className="outlined-basic"
                            label="English Word"
                            variant="outlined"
                            value={wordPair.english}
                            onChange={e => {
                                setWordPair({
                                ...wordPair,
                                english: e.target.value
                                })}}
                        />
                        <TextField
                            className="outlined-basic"
                            label="English Word"
                            variant="outlined"
                            value={wordPair.german}
                            onChange={e => {
                                setWordPair({
                                ...wordPair,
                                german: e.target.value
                                })}}
                        />
                        <Button type="submit" variant="contained" color="primary" className={classes.buttonContainer}>
                            Add to Word List
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FormInput;
