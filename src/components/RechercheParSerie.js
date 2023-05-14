import React from 'react'
import  { useState,useEffect }from 'react'
import VilleService from '../services/VilleService'
import { Button, Modal,Row } from 'react-bootstrap';
import ZoneService from '../services/ZoneService';
import SerieService from '../services/SerieService';
import ResultsComponent from './ResultsComponent';
import { Link } from 'react-router-dom'

import { Dropdown, FormControl,Form } from 'react-bootstrap';
import SearchComponent from './SearchComponent';
const RechercheParSerie = () => {
  const [ville, setVille] = useState([]);
  const [zone, setZone] = useState([]);
  const [serie, setSerie] = useState([]);
  const [selectedVille, setSelectedVille] = useState();
  const [selectedZone, setSelectedZone] = useState();
  const [selectedSerie, setSelectedSerie] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('Choisir une Ville');
  const [showResults, setShowResults] = useState(false);

  console.log("selectedVille:", selectedVille);
console.log("selectedZone:", selectedZone);
console.log("selectedSerie:", selectedSerie);
  {/* Setting  handleOptionSelect  for each dropdown*/}
  const handleVilleSelect = (selectedOption) => {
    setSelectedVille(selectedOption);
    if (selectedOption) {
      getAllZones(selectedOption);
    }
  }

  const handleZoneSelect = (selectedOption) => {
  setSelectedZone(selectedOption);
  }

  const handleSerieSelect = (selectedOption) => {
  setSelectedSerie(selectedOption);
  }

  const handleSearchClick = () => {
    setShowResults(true);
  };


 {/* Setting useEffect for each Dropdown*/}
  useEffect(() => {
    getAllVilles();
  }, []);

  useEffect(() => {
    getAllSeries();
  }, []);

  useEffect(() => {
    getAllZones();
  }, []);

  useEffect(() => {
    if (selectedVille) {
      getAllZones(selectedVille);
    }
  }, [selectedVille]);



  {/* Setting the methods that bring data from api using service */}
  const getAllVilles = () => {
    VilleService.getAllVilles()
      .then((response) => {
        setVille(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllZones = (selectedVille) => {
    if (!selectedVille) {
      console.log('selectedVille is undefined');
      return;
    }
    VilleService.getZoneByVille(selectedVille)
      .then((response) => {
        setZone(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllSeries = () => {
    SerieService.getAllSeries()
      .then((response) => {
        setSerie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (

    <div class="container-xxl bg-white p-0" >
    
        
    <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <Row>
              <div className="col-sm-8">
                <h2  class="display-3 animated slideInLeft text-lg-start title ">Chercher <br/> Des Restaurants <br/> Par Series</h2>
              </div>
              <div className="col-sm-4">
              <Link to={{
                  pathname: "/results",
                  search: `?v=${selectedVille}&z=${selectedZone}&se=${selectedSerie}`
                  
                      }} className="btn btn-secondary mb-2 but3"> Chercher </Link>
              </div>
            </Row>
        </div>


        
        <div class="row g-3 d-flex  ">
         
          <div class="col-sm-4 col-12 ">
          <SearchComponent  buttonTitle={selectedTitle} popupTitle="Choisir une Ville" options={ville.map(ville => ville.nom)} handleOptionSelect={handleVilleSelect}/>
          </div>  
            <div class="col-sm-4 col-12">
              <SearchComponent buttonTitle="Choisir une Zone" popupTitle="Choisir une Zone" options={zone.map(zone => zone.nom)} handleOptionSelect={handleZoneSelect}/>
            </div>
            
            <div class="col-sm-4 col-12">
              <SearchComponent buttonTitle="Choisir une Serie" popupTitle="Choisir une Serie" options={serie.map(serie => serie.nom)} handleOptionSelect={handleSerieSelect}/>
  </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default RechercheParSerie