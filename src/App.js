import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios from "axios";
import axios from 'axios';
import Header from "./Header";
import Card from './Card';
import Footer from './Footer'
import styled from 'styled-components'

const AppStyle = styled.div`
background-color: #14213d;
color: #f1faee;
title {
  color : white;
};
p {
  font-size: 1.6rem;
  color: #f1faee;
}
`

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
        <AppStyle>
          <Header/>
          <Card photo={data} content={data} title={data}/>
          <Footer/>
        </AppStyle>          
      </p>
    </div>
  );
}
;
