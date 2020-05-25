import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
          textAlign: 'center',
        },
    },
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
    }
}));

const QuestionBox = ({ question, questionId, handleAnswer, isLastQuestion, totalQuestions }) => {
    const classes = useStyles();
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
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        className="outlined-basic"
                        label="type your answer"
                        variant="outlined"
                        fullWidth
                        value={givenAnswer}
                        onChange={e => {setGivenAnswer(e.target.value)}}
                    />
                </form>
                <Button onClick={handleSubmit} className={classes.buttonContainer} variant="contained" color="primary">
                        {isLastQuestion ? 'Almost Done' : 'Next Question'}
                </Button>
            </Paper>
        </Grid>
    );
};

export default QuestionBox;
