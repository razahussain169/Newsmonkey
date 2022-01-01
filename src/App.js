import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path="/"element={<News key="general" pageSize={9} country="in" category="general"/>}/>
        <Route path="/general"element={<News key="general" pageSize={9} country="in" category="general"/>}/>
        <Route path="/health"element={<News key = "health" pageSize={9} country="in" category="health"/>}/>
        <Route path="/business"element={<News key ="business"pageSize={9} country="in" category="business"/>}/>
        <Route path="/entertainment"element={<News key ="buiseness"pageSize={9} country="in" category="entertainment"/>}/>
        <Route path="/science"element={<News key ="science"pageSize={9} country="in" category="science"/>}/>
        <Route path="/sports"element={<News key ="sports"pageSize={9} country="in" category="sports"/>}/>
        <Route path="/technology"element={<News key ="tehnology"pageSize={9} country="in" category="technology"/>}/>
      </Routes>
      </>
    )
    
  }
}
