import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home /> }></Route>
        <Route path="/:id" exact element={ <Detail /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}