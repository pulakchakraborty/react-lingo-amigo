import React from 'react';
import { Paper, Typography, Grid, ListItemText, } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '10px',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        height: 400,
        overflowY: 'scroll',
    },
    title: {
        margin: theme.spacing(2, 0, 2),
        textAlign: 'center',
    },
}));

const WordList = ({ wordBank }) => {
    const classes = useStyles();

    const renderList = wordBank.map((data, index) => {
        return(
            <ListItem key={index}>
                <ListItemText
                    primary={data.english}
                    secondary={data.german}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    });

    return(
        <Grid container spacing={3} justify={"center"}>
            <Grid item xs={12} sm={12} md={6} >
                <Paper className={classes.paper}>
                    <Typography variant="h6" color={'primary'} className={classes.title} >
                        Word List
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                        {wordBank.length > 0 && renderList}
                        {/*generate(
                            <ListItem>
                            <ListItemText
                                primary="Single-line item"
                                secondary="secondary line"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>,
                        )*/}
                        </List>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default WordList;
