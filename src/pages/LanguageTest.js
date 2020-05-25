import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";

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
    const history = useHistory();
    const testWordBank = [...location.state.selectedWordBank];

    /* States for LanguageTest component */
    const [ resultData, setResultData ] = useState({quizResponse: [], score: 0 });
    const [ questionCounter, setQuestionCounter ] = useState(0);
    const [ lastQuestionFlag , setLastQuestionFlag] = useState(false);

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

        console.log(`inside handle answer after setResultData: ${resultData}`);
        if (questionCounter < testWordBank.length -1 ) {
            setTimeout(() => setNextQuestionCounter(), 200);
        } else {
            setTimeout(() => setLastQuestionFlag(true), 200);
        }
    };

    const setNextQuestionCounter = () => {
        setQuestionCounter(questionCounter => questionCounter + 1);
    };

    /* This hook is used to watch the lastQuestionFlag,
        calculate final score % of the user and redirect user
        to the test-result page with the testResultData and score %
    */
    useEffect(() => {
        if (lastQuestionFlag) {
            const setResult = () => {
                let a = resultData.score;
                let b = testWordBank.length;
                const scorePercentage = Math.round(100*a/b);
                history.push('/test-result', { testResultData: [...resultData.quizResponse], testScore: scorePercentage });
            };
            setResult();
        }
    }, [lastQuestionFlag]);

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
