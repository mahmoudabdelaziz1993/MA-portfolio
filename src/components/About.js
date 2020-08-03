import React from 'react'
import { Card, CardContent, Typography, makeStyles, useTheme } from '@material-ui/core'
import { FormatQuote } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "100%",
        boxShadow: 'none',
        backgroundColor:'#303841',
        minHeight: '100vh',


    },
    detail: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: theme.spacing(5),
        paddingTop:"15%"

    },
    title: {
        backgroundColor: "#303841"
    },
    titleText: {
        fontSize: "12vw"
    }, suntitle: {

        fontSize: "3vw",
        paddingLeft: theme.spacing(2),
        textAlign: 'justify',
        paddingTop:"22%"


    }

}))

function About() {
    const classes = useStyles()
    const theme = useTheme()


    return (
        <Card className={classes.root}>

            <CardContent className={classes.detail}>

                <Typography variant='h3' className={classes.titleText} color='secondary'>
                    About me
                </Typography>

                <Typography variant='subtitle2' className={classes.suntitle}  color='primary'>
                    <span><FormatQuote color='secondary' /></span>I seek challenging opportunities where I can fully use my skills for the success the organization. <span><FormatQuote color='secondary' /></span>
                </Typography>

            </CardContent>

        </Card>
    )
}

export default About
