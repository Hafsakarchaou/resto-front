import React , { useEffect } from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';
import ListSpecialiteComponent from "./ListSpecialiteComponent";
import RestaurantListComponent from "./RestaurantListComponent";
import SerieListComponent from "./SerieListComponent";
import AddSpecialiteComponent from "./AddSpecialiteComponent";
import AddSerieComponent from "./AddSerieComponent";
import AddCityComponent from "./AddCityComponent";
import AddZoneComponent from "./AddZoneComponent";
import AddRestaurantComponent from "./AddRestaurantComponent";
import VilleListComponent from "./VilleListComponent";
import ListZoneComponent from "./ListZoneComponent";
import HomeComponent from "./HomeComponent";
import HeaderComponent from "./HeaderComponent"; 

const AdminRoutes = ({handleLogout, isAdmin }) => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderComponent handleLogout={handleLogout} /> 
      <Routes>
        <Route path="home" element={<HomeComponent />} />
        <Route path="specialites" element={<ListSpecialiteComponent />} />
        <Route path="restaurants" element={<RestaurantListComponent />} />
        <Route path="series" element={<SerieListComponent />} />
        <Route path="specialites/add-specialite" element={<AddSpecialiteComponent />} />
        <Route path="series/add-serie" element={<AddSerieComponent />} />
        <Route path="ville/add-city" element={<AddCityComponent />} />
        <Route path="edit-city/:id" element={<AddCityComponent />} />
        <Route path="zones/add-zone" element={<AddZoneComponent />} />
        <Route path="restaurants/add-restaurant" element={<AddRestaurantComponent />} />
        <Route path="edit-specialite/:id" element={<AddSpecialiteComponent />} />
        <Route path="edit-zone/:id" element={<AddZoneComponent />} />
        <Route path="edit-serie/:id" element={<AddSerieComponent />} />
        <Route path="edit-restaurant/:id" element={<AddRestaurantComponent />} />
        <Route path="ville" element={<VilleListComponent />} />
        <Route path="zones" element={<ListZoneComponent />} />

        {/* Nested Routes */}
        <Route path="series/*" element={<SeriesRoutes />} />
      </Routes>
    </div>
  );
};

const SeriesRoutes = () => {
  return (
    <Routes>
      <Route path="add-serie" element={<AddSerieComponent />} />
    </Routes>
  );
};

export default AdminRoutes;
