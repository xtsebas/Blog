import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import LoadingScreen from './loading/loadingScreen';
import Posts from './post/Post';
import User from './user/User';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import MyFormComponent from './Form/Form';
import Login from './login/Login';
import Postdetail from './post/Postdetail';

const App = () => {
  return (
      <Router>
        <div className='screen'>
          <Sidebar/>
          <div className='content'>
            <Routes className="content">
                <Route path='/' Component={Login}></Route>
                <Route path='/posts' Component={Posts}></Route>
                <Route path='/user' Component={User}></Route>
                <Route path='/post' Component={MyFormComponent}></Route>
                <Route path='/postid' Component={Postdetail}></Route>
            </Routes>

          </div>
        </div>
      </Router>

  );
};

export default App;
