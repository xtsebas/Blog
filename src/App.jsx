import React, { useState, useEffect } from 'react';
import LoadingScreen from './loading/loadingScreen';
import Posts from './post/Post';
import './App.css'

const App = () => {
  return (
    <div>
      <Posts/>
    </div>
  );
};

export default App;
