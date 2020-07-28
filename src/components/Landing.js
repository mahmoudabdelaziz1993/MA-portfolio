import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Divider, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "189px"
    },
});

function Landing() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography align='left'  variant='h1'>
                Hi l'm 
         </Typography>
         <Typography align='left'  variant='h1'>
                Mahmoud Abdelaziz 
         </Typography>
            <Divider variant="middle" />
            <Typography variant='h5'> FullStack DEV. </Typography>
        </Box>

    )
}

export default Landing
