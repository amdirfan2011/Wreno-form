import React from 'react';
import  Home  from './components/home/Home';
import  TradePartner  from './components/tradePartner/TradePartner';
import  Layout  from './layout/Layout';
import { Route, Routes, Navigate  } from 'react-router-dom';
import Submit from './components/submit/Success';
export const AppRoutes = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/Home" element={<Home/>} />
        <Route  path="/TradePartner" element={<TradePartner/>} />
        <Route  path="/Submit" element={<Submit/>} />
      </Routes>
    </div>
  );
};