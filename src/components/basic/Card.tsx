import React from 'react';
import { makeStyles, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '20%',
        backgroundColor: theme.palette.secondary.main
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default (props: IProps) => {
    const classes = useStyles();
    const { title, content, buttonText, onClick, subtitle } = props;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="primary" gutterBottom>
                    {title}
                </Typography>
                {subtitle && <Typography color="primary" variant="h5" gutterBottom>{subtitle}</Typography>}
                <Typography variant="body1">{content}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={onClick}>{buttonText}</Button>
            </CardActions>
        </Card>
    );
};

interface IProps {
    title: string;
    subtitle?: string;
    content: string;
    buttonText: string;
    onClick: () => void;
}