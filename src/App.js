import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import News from './component/News/News';
import Carditem from './component/Card/Card';
import {Grid} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   gridContainer:{
  
   }
}));

function App() {
  const classes= useStyles();
  const [articles,setArticles] = useState([]);

 useEffect(()=>{
    axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=d275cf2d75e84a1d85b2aa718654ea9e')
    .then(data => setArticles(data.data.articles))
 },[]);

  return (
    <>
    <Grid container 
     spacing={4}
     direction="row"
     justify="flex-space-between"
    alignItems="flex-center">
  
   
    {articles.map(article =>  <Grid item xs={12} sm={6} md={3}> <Carditem article={article} /> </Grid>)}
    
  
   </Grid>
    
   <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
    <News />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <News />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <News />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <News />
    </Grid>
   </Grid>

    
    </>
  );
}

export default App;
