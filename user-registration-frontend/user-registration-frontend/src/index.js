import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/home';
import Login from './views/login/login';
import RegisterPage from './views/register/RegisterPage';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [user, setUser] = useState(null); // Define user state

  return (

    <>
     <Header user={user}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Dashboard" element={ user ?(<Dashboard user={user} />):(<p>Please log in.</p>)} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

root.render(<App />);


