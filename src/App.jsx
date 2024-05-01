import React, { useState, useEffect } from 'react';
import './App.css';
import { TokenProvider } from './login/useToken'
import { NavigationProvider  } from './HOC/useNavigate'
import Pages from './HOC/Admin';

const App = () => {
  return (
    <TokenProvider>
      <NavigationProvider>
        <Pages />
      </NavigationProvider>
    </TokenProvider>
  );
};

export default App;
