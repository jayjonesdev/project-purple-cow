import React from 'react';
import { Appbar } from '@jayjonesdev/react-material-ui-library';
import { makeStyles, Typography, Button } from '@material-ui/core';
import countService from '../../services/count.service';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    },
    data: {
        padding: theme.spacing(2)
    }
}));

export default () => {
    const classes = useStyles();
    const [hitCount, setHitCount] = React.useState<any>(0);

    const hit = () => {
        countService.hit().then(d => setHitCount(d.value));
    };

    return (
        <div className={classes.root}>
            <Appbar position="fixed">
                <img className={classes.logo} src={'https://pbs.twimg.com/profile_images/1030017799379271681/L5eXPaqt_400x400.jpg'} alt="logo" />
            </Appbar>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.data}>
                    <Typography variant="h6"><b>Hit Count:</b> {hitCount}</Typography>
                    <Button variant="contained" color="primary" onClick={hit}>Hit</Button>
                </div>
            </main>
        </div>
    )
}