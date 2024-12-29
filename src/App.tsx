import React from 'react';
import './App.css';
import BasicTextFields from './Login/Login';
//import UsersList from './component/Home/StatWidget';
import  netlix2 from './assets/image/netlix2.webp';
import { Route, Routes } from 'react-router-dom';
//import { Sidebar } from './component/Home/Sidebar';
//import { Navbar } from './component/Home/Navbar'
//import {StatsSection} from './component/Home/StatsSection';
//import { OM } from './component/Home/OM';
//import { Settings } from './component/Home/Settings';
//import { Profile } from './component/Home/Profile';
//import { Calculator } from './component/Home/Calculator';
//import { AddItems } from './component/Home/addItems';
//import { Register } from './component/Home/Register';
//import { QA1 } from './component/Home/QA1';
//import { QA2 } from './component/Home/QA2';
//import { Autocompletes } from './component/Home/Autocomplete';
//import { MyForm } from './component/Home/UseReducerExample';
//import { UseReducerCalculation } from './component/Home/UseReducerExample2';
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
     // <Route 
       // path="/UsersList" 
        //element={
          //<><Sidebar />
          
         // <div style={{ flex: 1, padding: '20px' }}>
        //<h1>Dashboard</h1>
        //<Navbar />
       // <div style={{ padding: '20px' }}>
        //<StatsSection />
          //<UsersList />
        //</div>
      //</div></>
     // } 
      />
{/*
<Route path="/" element={<OM />} />
<Route path="/profile" element={<Profile />} />
<Route path="/settings" element={<Settings />} />
<Route path="/calculator" element={<Calculator/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="qa1" element={<QA1/>}/>
<Route path="/qa2" element={<QA2/>}/>
<Route path="/Autocompletes" element={<Autocompletes/>}/>
<Route path="MyForm" element={<MyForm/>}/>
<Route path="/UseReducerCalculation" element={<UseReducerCalculation/>}/>
*/}

      <Route path='/Pages/Home' element={<Home/>}/>
    </Routes>
  );
}

export default App;