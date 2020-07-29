import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Divider, Card, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "317px",
        backgroundColor:'inherit',
        boxShadow:'none'
    },
});

function Landing() {
    const classes = useStyles();

    return (
        // <Box className={classes.root}>
        //     <Typography align='left'  variant='h1'>
        //         Hi l'm 
        //  </Typography>
        //  <Typography align='left'  variant='h1'>
        //         Mahmoud Abdelaziz 
        //  </Typography>
        //     <Divider variant="middle" />
        //     <Typography variant='h5'> FullStack DEV. </Typography>
        // </Box>
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h3' > HI i'm Mahmoud Abdelaziz
                </Typography>
                <Divider variant="middle" />
                <Typography variant='h5' color="textSecondary"> FullStack DEV. </Typography>
            </CardContent>

        </Card>
    )
}

export default Landing
