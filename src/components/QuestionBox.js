import React, { useState, createRef } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
    questionTitle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    buttonContainer: {
        margin: theme.spacing(2),
    },
}));

const QuestionBox = ({ question, questionId, handleAnswer, isLastQuestion, totalQuestions }) => {
    const classes = useStyles();
    const formRef = createRef();
    const [ givenAnswer, setGivenAnswer ] = useState('');

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        console.log(`given answer: ${givenAnswer}`);
        // Reset the text input field after each answered question
        const userAnswer = givenAnswer;
        setGivenAnswer('')
        handleAnswer(userAnswer);
    }

    return(
        <Grid item sm={9} md={6} xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h4" color={'primary'} className={classes.questionTitle} >
                    Word {questionId} of {totalQuestions}
                </Typography>
                <Typography variant="h3" color={'secondary'} className={classes.questionTitle} >
                    {question}
                </Typography>
                <ValidatorForm
                    ref={formRef}
                    onSubmit={handleSubmit}
                    onError={e => console.log(e)}
                >
                    <TextValidator
                        label="type your answer"
                        name="english"
                        variant="outlined"
                        fullWidth
                        value={givenAnswer}
                        onChange={e => {setGivenAnswer(e.target.value)}}
                        validators={['required', 'matchRegexp:^[A-Za-zäöüÄÖÜ]+$']}
                        errorMessages={['this field is required', 'is it a word or a password?']}
                    />
                    <Button type="submit" className={classes.buttonContainer} variant="contained" color="primary">
                        {isLastQuestion ? 'Almost Done' : 'Next Question'}
                    </Button>
                </ValidatorForm>
            </Paper>
        </Grid>
    );
};

export default QuestionBox;
