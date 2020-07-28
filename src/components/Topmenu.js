import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, IconButton, Avatar } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Linkedin from '@material-ui/icons/LinkedIn'
import CodeIcon from '@material-ui/icons/Code';
const useStyles = makeStyles((theme) => ({
    root: {
       
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },Brand :{
        flexGrow: 1,
        fontFamily:'Audiowide',
        
        
    },grow:{
        flexGrow:1
    },shadow:{
        boxShadow:'none',
    }

   
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <AppBar position="sticky" color="transparent" xs={12} className={classes.shadow} >
            <Toolbar>
                <IconButton edge='start' color='inherit' className={classes.menuButton}>
                    <Avatar variant="square" className={classes.root} src ='/ligh-logo.png'/>
                </IconButton>
                <div className={classes.grow}/>
                <IconButton  color='inherit'>
                    <Linkedin style={{ fontSize: 30 }} />
                </IconButton>
                <IconButton  color='inherit'>
                    <FacebookIcon style={{ fontSize: 30 }}/>
                </IconButton>
                <IconButton size='small' >
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                    <ExploreIcon style={{ fontSize: 30 }} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>

    );
}
