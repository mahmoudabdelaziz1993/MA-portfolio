import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { WorkOutlined } from '@material-ui/icons'
import { Typography, Divider, Card, CardActions, CardContent , Button} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "320px",
        marginLeft :'10px',
        backgroundColor:'inherit',
        boxShadow:'none'
    },
});

function Landing() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h3' > HI i'm <br/> Mahmoud Abdelaziz
                </Typography>
                <Divider variant="middle" />
                <Typography variant='h5' color="textSecondary"> FullStack DEV. </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' startIcon={<WorkOutlined/>}> Hire me </Button>
            </CardActions>

        </Card>
    )
}

export default Landing
