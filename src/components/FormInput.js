import React, { useState, createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    const formRef = createRef();

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
                    <ValidatorForm
                            className={classes.root}
                            ref={formRef}
                            onSubmit={handleSubmit}
                            onError={e => console.log(e)}
                        >
                            <TextValidator
                                className="outlined-basic"
                                label="English Word"
                                name="english"
                                variant="outlined"
                                value={wordPair.english}
                                onChange={e => {
                                    setWordPair({
                                    ...wordPair,
                                    english: e.target.value
                                    })
                                }}
                                validators={['required', 'matchRegexp:^[A-Za-zäöüÄÖÜ]+$']}
                                errorMessages={['this field is required', 'type a word, not a password']}
                            />
                            <TextValidator
                                className="outlined-basic"
                                label="German Word"
                                name="german"
                                variant="outlined"
                                value={wordPair.german}
                                onChange={e => {
                                    setWordPair({
                                    ...wordPair,
                                    german: e.target.value
                                    })
                                }}
                                validators={['required', 'matchRegexp:^[A-Za-zäöüÄÖÜ]+$']}
                                errorMessages={['this field is required', 'type a word, not a password']}
                            />
                            <Button type="submit" variant="contained" color="primary" className={classes.buttonContainer}>
                                Add to Word List
                            </Button>
                        </ValidatorForm>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FormInput;
