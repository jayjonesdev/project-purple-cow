import React from 'react';
import { Appbar } from '@jayjonesdev/react-material-ui-library';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 0),
    },
    logo: {
        height: 42,
        boxSizing: 'border-box'
    }
}));

export default () => {
    const classes = useStyles();
    const [hitCount, setHitCount] = React.useState<number | null>(0);
    
    return (
        <div className={classes.root}>
            <Appbar position="fixed">
                <img className={classes.logo} src={'https://pbs.twimg.com/profile_images/1030017799379271681/L5eXPaqt_400x400.jpg'} alt="logo" />
            </Appbar>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                    <Typography variant="h6"><b>Hit Count:</b> {hitCount}</Typography>

                </div>
            </main>
        </div>
    )
}