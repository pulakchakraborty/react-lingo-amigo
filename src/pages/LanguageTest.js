import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import QuestionBox from '../components/QuestionBox';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '10px',
    },
    testTitle: {
        margin: theme.spacing(2, 0, 2),
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    questionTitle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
}));

const LanguageTest = () => {
    const classes = useStyles();
    const location = useLocation();
    const testWordBank = [...location.state.selectedWordBank];

    const [ questionCounter, setQuestionCounter ] = useState(0);

    const [ resultData, setResultData ] = useState({quizResponse: [], score: 0});

    const handleAnswer = (userAnswer) => {
        let isHit = false;
        let score = resultData.score;
        if (userAnswer.toLowerCase() === testWordBank[questionCounter].german.toLowerCase()) {
            console.log(`answer right`);
            isHit = true;
            score = score + 1;
        }

        setResultData({...resultData,
            quizResponse: [...resultData.quizResponse,
                {
                    question: testWordBank[questionCounter].english,
                    answer: testWordBank[questionCounter].german,
                    userAnswer: userAnswer,
                    isHit: isHit
                }
            ],
            score: score
        });

        if (questionCounter < testWordBank.length -1 ) {
            console.log(`answer is: ${userAnswer}`);
            setNextQuestionCounter();
        } else {
            setResult();
        }
    };

    const setNextQuestionCounter = () => {
        const counter = questionCounter + 1;
        setQuestionCounter(counter);
    };

    const setResult = () => {
        console.log(`Final result: ${resultData.score}`);
    };
    console.log(resultData);

    return(
        <Grid container spacing={3} justify={"center"}>
            <Grid item sm={12} md ={12} xs={12}>
                <Typography variant="h4" color={'primary'} className={classes.testTitle} >
                    Test your vocabulary
                </Typography>
            </Grid>
            <QuestionBox
                questionId={questionCounter + 1}
                question={testWordBank[questionCounter].english}
                handleAnswer={handleAnswer}
                isLastQuestion={questionCounter === testWordBank.length - 1 ? true: false}
                totalQuestions={testWordBank.length}
            />
        </Grid>
    );
};

export default LanguageTest;
