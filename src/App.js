import React from 'react';
import './App.css';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Topmenu from './components/Topmenu';
import { Grid } from '@material-ui/core';
import Landing from './components/Landing'
import About from './components/About';


const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#eeeeee",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#d72323',
    }
  }, typography: {
    h3: {
      fontFamily: 'Saira Stencil One',
      fontSize: "6vw",
      lineBreak: 'auto'

    },button:{
      fontSize:'2vw'
    }
  }
});

const useStyles = makeStyles({
  Banner: {
    background: `url(${process.env.PUBLIC_URL}/Cover1.jpg) no-repeat center center fixed`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    minHeight: '100vh',
    margin: 'none'

  }
})
function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
      >
        <Topmenu />
        <Grid item container className={classes.Banner} >
          <Grid item xs={5} md={6} />
          <Grid item xs={7} md={4} >
            <Landing />
          </Grid>
          <Grid item xs={false} md={2} />
        </Grid>
        <Grid item container >
          <About />
        </Grid>
      </Grid>

    </ThemeProvider>

  );
}

export default App;
