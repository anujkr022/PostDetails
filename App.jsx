import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BlogList from './component/BlogList';
import BlogDetails from './page/BlogDetails';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<BlogList />} />
           <Route path="/post/:id" element={<BlogDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;