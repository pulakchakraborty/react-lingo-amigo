import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MissIcon from '@material-ui/icons/Cancel';
import HitIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2),
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    tableContainer: {
        maxHeight: 400,
        margin: theme.spacing(2),
    },
    table: {
        padding: theme.spacing(2),
    },
}));

const ResultTable = ({ testResultData }) => {
    const classes = useStyles();
    console.log(`inside Table component: ${testResultData}`);
    return(
        <Grid item sm={8} md={8} xs={10} justify={"center"}>
            <Typography variant="h4" color={'primary'} className={classes.title} >
                Review your answers
            </Typography>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell>Correct Answer</TableCell>
                            <TableCell>Your Answer</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {testResultData.map((row, index) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                <TableCell component="th" scope="row">
                                    {row.question}
                                </TableCell>
                                <TableCell>{row.answer}</TableCell>
                                <TableCell>{row.userAnswer}</TableCell>
                                {row.isHit ?
                                    <TableCell><HitIcon style={{ color: 'green'}} /></TableCell>
                                    :
                                    <TableCell><MissIcon color={'secondary'}/></TableCell>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default ResultTable;
