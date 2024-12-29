import React from 'react';
import './App.css';
import BasicTextFields from './Login/Login';
import  netlix2 from './assets/image/netlix2.webp';
import { Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
function App() {
  const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${netlix2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <BackgroundWrapper>
            <BasicTextFields />
          </BackgroundWrapper>
        } 
      />
     
      
      />


      <Route path='/Pages/Home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
