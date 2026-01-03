const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config();
const axios = require("axios");



const API_KEY = process.env.API_KEY;

app.get("/tmdb/{*path}", async (req,res)=> {
   try{
    const subPath = req.params.path.join('/');
    const queryParams = req.query;
    console.log(subPath);

    const response = await axios.get(`https://api.themoviedb.org/3/${subPath}`,{
        params:{
            ...queryParams,
            api_key:API_KEY
        }
    })
    res.json(response.data);
   }catch(err){
    console.log("error");
   }
   
});

app.get("/imdb/{*path}",async (req,res)=> {
   try{
    const subPath = req.params.path.join('/');
    const queryParams = req.query;
    console.log(subPath);

    const response = await axios.get(`https://api.themoviedb.org/3/${subPath}`,{
        params:{
            ...queryParams,
            api_key:API_KEY
        }
    })
    res.json(response.data);
   }catch(err){
    console.log("error");
   }
   })


app.listen(5000,()=>{
    console.log("server is running on port 5000" )
});
module.exports=app;
