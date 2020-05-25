import React from 'react';
import { Paper, Typography, Grid, ListItemText, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
    },
    wordlistContainer: {
        backgroundColor: theme.palette.background.paper,
        height: 300,
        overflowY: 'scroll',
    },
    title: {
        margin: theme.spacing(2, 0, 2),
        textAlign: 'center',
    },
}));

const WordList = ({ wordBank, deleteWord }) => {
    const classes = useStyles();

    const renderList = wordBank.map((data, index) => {
        return(
            <>
                <ListItem key={index}>
                    <ListItemText style={{ width: '40%' }}
                        primary={<Typography variant="h6">{data.english}</Typography>}
                    />
                    <ListItemText style={{ width: '40%' }}
                        primary={<Typography variant="h6">{data.german}</Typography>}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteWord(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider component="li" />
            </>
        );
    });

    return(
        <Grid container spacing={3} justify={"center"}>
            <Grid item xs={12} sm={9} md={6} >
                <Paper className={classes.paper}>
                    <Typography variant="h5" color={'primary'} className={classes.title} >
                        Your Wordbook ({wordBank.length} words)
                    </Typography>
                    <div className={classes.wordlistContainer}>
                        <List>
                        {renderList}
                        </List>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default WordList;
