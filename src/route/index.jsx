import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from '../container/Home'
import AboutContainer from '../container/About'
import MoviesContainer from '../container/Movies'
import TvSeriesContainer from '../container/TvSeries'
import SearchContainer from '../container/Search'
import DetailsContainer from "../container/Details";
import ContactContainer from "../container/Contact";

import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const RouterComponent = ()=>{
  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomeContainer/>}/>
          <Route path="/about" element={<AboutContainer/>}/>
          <Route path="/movies" element={<MoviesContainer/>}/>
          <Route path="/series" element={<TvSeriesContainer/>}/>
          <Route path="/search" element={<SearchContainer/>}/>
          <Route path="/contact" element={<ContactContainer/>}/>
          <Route path="/details/:movieid/:mediatype" element={<DetailsContainer/>}/>
          
          

        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default RouterComponent;