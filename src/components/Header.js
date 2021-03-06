import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    clickableIcon: {
        marginRight: theme.spacing(1),
        '&:hover': {
            color: 'red',
            cursor: 'pointer',
        },
    },
}));

const Header = ({ onSwitchTheme }) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <GitHubIcon
                        className={classes.clickableIcon}
                        onClick={event =>  window.location.href='https://github.com/pulakchakraborty/react-lingo-amigo'}
                    />
                    <Brightness4Icon
                        className={classes.clickableIcon}
                        onClick={onSwitchTheme}
                    />
                    <Typography variant="h6">
                        LingoAmigo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
