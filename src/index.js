import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Negocio from './pages/Negocio';
import Servicos from './pages/Servicos';
import Localizacao from './pages/Localizacao';
import Profissionais from './pages/Profissionais';
import Personalizacao from './pages/Localizacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/negocio"> Negócio </Link>
        <Link to="/servicos"> Serviços </Link>
        <Link to="/localizacao"> Localização </Link>
      </nav>
      <App/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/negocio" element={<Negocio/>}/>
            <Route path="/servicos" element={<Servicos/>}/>
            <Route path="/localizacao" element={<Localizacao/>}/>
            <Route path="/profissionais"  element={<Profissionais/>}/>
            <Route path="/personalizacao" element={<Personalizacao/>}/>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
