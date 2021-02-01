import React, { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import LoginPage from './components/Login';
import { InfoContext, AppContextInterface } from './context/InfoContext';

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [authToken, setAuth] = useState('Null');

  const info: AppContextInterface = {
    loggedIn,
    setLogin,
    authToken,
    setAuth
  }

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') {
      setLogin(true)
    }
    if (localStorage.getItem('authtoken')) {
      const token: any = localStorage.getItem('authtoken');
      setAuth(token);
    }
  }, []);

  return (
    <div className="App">
      <InfoContext.Provider value={info}>
        {loggedIn
          ? <AppLayout />
          : <LoginPage />
        }
      </InfoContext.Provider>
    </div>
  )

};

export default App;