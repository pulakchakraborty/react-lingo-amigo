import React, { Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Grid, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ResultTable from '../components/ResultTable';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '10px',
    },
    resultTitle: {
        margin: theme.spacing(2, 2, 0),
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    questionTitle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    fabContainer: {
        flexGrow: 1,
        position: 'fixed',
        top: theme.spacing(1.5),
        right: theme.spacing(2),
    },
}));

const TestResult = () => {
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory();
    const testResultData = [...location.state.testResultData];
    console.log(`inside test result: ${location.state.testResultData}`);
    const onDashboardClick = () => {
        history.push('/');
    }
    return(
        <Fragment>
                <Fab variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="back"
                    onClick={onDashboardClick}
                    className={classes.fabContainer}
                >
                    Dashboard
                </Fab>
            <Grid container spacing={3} justify={"center"}>
            <Grid item sm={12} md={12} xs={12}>
                <Typography variant="h4" color={'primary'} className={classes.resultTitle} >
                    You scored
                </Typography>
                <Typography variant="h3" color={'secondary'} className={classes.resultTitle} >
                    {location.state.testScore}%
                </Typography>
            </Grid>
            <ResultTable testResultData={testResultData} />
        </Grid>
        </Fragment>
    );
};

export default TestResult;
