import React from 'react';
import './App.css';
import { createMuiTheme,makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Topmenu from './components/Topmenu';
import { Grid } from '@material-ui/core';
import Landing from './components/Landing'


const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffe74cff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ff5964ff',
    },
    info: {
      // This is green.A700 as hex.
      main: '#ff5964ff',
    },
    success: {
      // This is green.A700 as hex.
      main: '#6bf178ff',
    }
  }, typography: {
    h3:{
      fontFamily:'Saira Stencil One',
    
    }
  }
});

const useStyles = makeStyles({
  Banner : {
    background:`url(${process.env.PUBLIC_URL}/Cover.jpg) no-repeat center center fixed`,
    backgroundRepeat:'no-repeat',
    backgroundSize :'contain',
    backgroundSize:"cover",
    minHeight:'100vh'

  }
})
function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        className={classes.Banner}
        
      >
        <Grid item >
          <Topmenu />
        </Grid>
        <Grid item container >
          <Grid item xs={4} md={6} />
          <Grid item  xs={8} md={4} >
             <Landing/>
          </Grid>
          <Grid item xs={false} md={2} />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
