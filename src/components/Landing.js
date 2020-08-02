import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { WorkOutlined , CloudDownload} from '@material-ui/icons'
import { Typography, Divider, Card, CardActions, CardContent , Button} from '@material-ui/core';
import { motion } from 'framer-motion'

const useStyles = makeStyles({
    root: {
        padding:"2px",
        marginTop: "220px",
        backgroundColor:'inherit',
        boxShadow:'none',
        width:"100%"
    },
});

function Landing() {
    const classes = useStyles();

    return (
        <motion.div initial={{scale:0.1}} animate={{ rotate : 360 , scale:1 }}
        whileHover ={{scale :1.2}}
        transition={{ type: 'spring',stiffness: 200,restSpeed: 5 }} >
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='h3' > HI i'm <br/> Mahmoud Abdelaziz
                </Typography>
                <Divider variant="middle" />
                <Typography variant='h5' color="textSecondary"> FullStack DEV. </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' startIcon={<WorkOutlined/>}> Hire me </Button>
                <Button variant='contained' startIcon={<CloudDownload/>}> Download resume </Button>
            </CardActions>

        </Card>
        </motion.div>
    )
}

export default Landing
