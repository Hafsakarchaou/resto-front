import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RechercheParSerie from './RechercheParSerie';
import RechercheParSpecialite from './RechercheParSpecialite';
import ResultsComponent from './ResultsComponent';
import SearchRestos from './SearchRestos';
import FooterComponent from './FooterComponent';
import Map from './Map';
import UserHeaderComponent from "./UserHeaderComponent"; 
const URoutes = () => {
  return (
  <div>
    <UserHeaderComponent />
    <Routes>
      <Route exact path="/RechercheParSerie" element={<RechercheParSerie />} />
      <Route exact path="/RechercheParSpecialite" element={<RechercheParSpecialite />} />
      <Route path="/results" element={<ResultsComponent />} />
      <Route path="/" element={<SearchRestos />} />
      <Route path="/Map" element={<Map />} />
    </Routes>
    <FooterComponent />
    </div>
  );
};

export default URoutes;
