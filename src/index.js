import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import SearchFrom from './components/SearchForm/SearchForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}>
          <Route path = "about" element = {<About/>}/>
          <Route path = "book" element = {<BookList/>}/>
          <Route path = "/book/:id" element = {<BookDetails/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </AppProvider>

);
