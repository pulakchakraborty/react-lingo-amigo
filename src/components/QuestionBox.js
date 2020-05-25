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

const QuestionBox = ({ question, answer, questionId, handleAnswer }) => {
    const classes = useStyles();
    const [ givenAnswer, setGivenAnswer ] = useState('');

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        console.log(`given answer: ${givenAnswer}`);
        handleAnswer(givenAnswer);
    }

    return(
        <Grid item sm={6} md={6} xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h4" color={'primary'} className={classes.questionTitle} >
                    Word {questionId}: {question} : {answer}
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
                <Button className={classes.buttonContainer} onClick={handleSubmit} variant="contained" color="primary">
                    Next Question
                </Button>
            </Paper>
        </Grid>
    );
};

export default QuestionBox;
