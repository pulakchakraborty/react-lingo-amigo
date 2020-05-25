import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    progressBar: {
        position: 'relative',
        height: 20,
        borderRadius: 20,
        border: '2px solid #3f51b5',
        background: '#c6cadc',
        boxShadow: 'inset 0 0 5px #000',
        marginLeft: '10%',
        marginRight: '10%',
        width: '80%',
    },
    progressFiller: {
        position: 'absolute',
        height: '100%',
        borderRadius: 'inherit',
        background: '#3f51b5',
        transition: 'width .5s ease-in',
    },
    progressBarTitle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
}));

const ProgressBar = ({ percentage }) => {
    const classes = useStyles();

    return(
        <Grid item sm={12} md={12} xs={12} justify={"center"}>
            <Typography variant="h5" color={'primary'} className={classes.progressBarTitle} >
                Progress Meter
            </Typography>
            <div className={classes.progressBar}>
                <div className={classes.progressFiller} style={{ width: `${percentage}%` }}></div>
            </div>
        </Grid>
    )
};

export default ProgressBar;
