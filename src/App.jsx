import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import LoadingScreen from './loading/loadingScreen';
import Posts from './post/Post';
import User from './user/User';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import MyFormComponent from './Form/Form';

const App = () => {
  return (
      <Router>
        <div className='screen'>
        <Sidebar/>
        <Routes className="content">
            <Route path='/' Component={Posts}></Route>
            <Route path='/user' Component={User}></Route>
            <Route path='/post' Component={MyFormComponent}></Route>
        </Routes>
        </div>
      </Router>

  );
};

export default App;
