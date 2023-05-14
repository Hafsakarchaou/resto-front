import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListSpecialiteComponent from "./components/ListSpecialiteComponent";
import ListVilleComponent from "./components/ListSpecialiteComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddSpecialiteComponent from "./components/AddSpecialiteComponent";
import AddCityComponent from "./components/AddCityComponent";
import AddZoneComponent from "./components/AddZoneComponent";
import AddSerieComponent from "./components/AddSerieComponent";
import AddRestaurantComponent from "./components/AddRestaurantComponent";
import ResultsComponent from "./components/ResultsComponent";
import SerieListComponent from "./components/SerieListComponent";
import RechercheParSpecialite from './components/RechercheParSpecialite';
import RechercheParSerie from './components/RechercheParSerie';
import SearchRestos from './components/SearchRestos';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import VilleListComponent from './components/VilleListComponent';
import ToolBar from './components/ToolBar';
import SideNav from './components/SideNav';
import Backdrop from './components/Backdrop';
import { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import ListZoneComponent from './components/ListZoneComponent';
import RestaurantListComponent from './components/RestaurantListComponent';





function App()  {


  return (
    <div>
      <Router>
       
      
      <HeaderComponent/>
      
      <Routes>
      <Route exact path = "/RechercheParSpecialite" element = {<RechercheParSpecialite/>} />
      <Route exact path = "/RechercheParSerie" element = {<RechercheParSerie/>} />
      <Route path = "/specialites" element = {<ListSpecialiteComponent/>} />
      <Route path = "/restaurants" element = {<RestaurantListComponent/>} />
      <Route path = "/series" element = {<SerieListComponent/>} />
      <Route path = "/specialites/add-specialite" element = {<AddSpecialiteComponent/>} />
      <Route path = "/series/add-serie" element = {<AddSerieComponent/>} />
      <Route path = "/ville/add-city" element = {<AddCityComponent/>} />
      <Route path = "/edit-city/:id" element = {<AddCityComponent/>} />
      <Route path = "/zones/add-zone" element = {<AddZoneComponent/>} />
      <Route path = "/restaurants/add-restaurant" element = {<AddRestaurantComponent/>} />
      <Route path = "/edit-specialite/:id" element = {<AddSpecialiteComponent/>}/>
      <Route path = "/edit-zone/:id" element = {<AddZoneComponent/>}/>
      <Route path = "/edit-serie/:id" element = {<AddSerieComponent/>}/>
      <Route path = "/edit-restaurant/:id" element = {<AddRestaurantComponent/>}/>
      <Route path = "/results" element = {<ResultsComponent/>}/>
      <Route path = "/ville" element = {<VilleListComponent/>} />
      <Route path = "/zones" element = {<ListZoneComponent/>} />
      <Route path = "/" element = {<HomeComponent/>} />
      <Route path = "/SearchRestos" element = {<SearchRestos/>} />
      
      
      </Routes>
      
      
      </Router>
    </div>
  );
}

export default App;
library.add(fab, fas, far)
