import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios from "axios";
import axios from 'axios';
import Header from "./Header";
import Card from './Card';


export default function App() {
  const [data, setData]  = useState([])
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <p>
      <Header/>
      <Card photo={data}/>
      <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

;
