import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {  IconButton, Avatar } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import GitHubIcon from '@material-ui/icons/GitHub';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Linkedin from '@material-ui/icons/LinkedIn'
import logo from '../img/ligh-logo.png'
const useStyles = makeStyles((theme) => ({
    root: {

        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    menuButton: {
        marginRight: theme.spacing(0),
    }, Brand: {
        flexGrow: 1,
        fontFamily: 'Audiowide',


    }, grow: {
        flexGrow: 1
    }, shadow: {
        boxShadow: 'none',
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
                    <Avatar variant="square" className={classes.root} src={logo} />
                </IconButton>
                <div className={classes.grow} />
                <IconButton color='inherit' href='https://www.linkedin.com/in/mahmoud-abdelaziz-salama/'>
                    <Linkedin style={{ fontSize: 30 }} />
                </IconButton>
                <IconButton color='inherit' href='https://github.com/mahmoudabdelaziz1993/'>
                    <GitHubIcon style={{ fontSize: 30 }} />
                </IconButton>
                <IconButton color='inherit' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
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
