import React, { useState, useEffect } from 'react';
import RestoService from '../services/RestoService';
import { useNavigate, useParams, Link } from 'react-router-dom';
import SpecialiteService from '../services/SpecialiteService';
import ZoneService from '../services/ZoneService';
import SerieService from '../services/SerieService';
import PhotoService from '../services/PhotoService';
import { Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import Select from 'react-select';

const AddRestaurantComponent = () => {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ran__, setRan__] = useState('');
  const [heure_ouverture, setHeure_ouverture] = useState('');
  const [heure_fermeture, setHeure_fermeture] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [specialites, setSpecialites] = useState([]);
  const [zone, setZone] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [serie, setSerie] = useState([]);

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSerie, setSelectedSerie] = useState('');
  const [specialite, setSpecialite] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const handleVilleSelect = (selectedValue) => {
    console.log(selectedValue);
    setSelectedZone(selectedValue);
  };
  const handleSerieSelect = (selectedValue) => {
    console.log(selectedValue);
    setSelectedSerie(selectedValue);
  };
  const handleSpecialtiesChange = (selectedValues) => {
    setSelectedSpecialties(selectedValues);
  };
  const saveOrUpdateRestaurant = (e) => {
    e.preventDefault();

    const restaurant = {
      nom,
      adresse,
      ran__,
      heure_ouverture,
      heure_fermeture,
      longitude,
      latitude,
      serie: selectedSerie ? { id: selectedSerie.id } : null,
      specialites: selectedSpecialties.map((speciality) => ({ id: speciality.value })),
      zone: selectedZone ? { id: selectedZone.id } : null,
      photos,
    };

    if (id) {
      RestoService.updateRestaurant(id, restaurant)
        .then(() => {
          navigate('/admin/restaurants');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RestoService.createRestaurants(restaurant)
        .then((response) => {
          const createdRestaurantId = response.data.id;
          const photoUploadPromises = [];

          photos.forEach((photo) => {
            const formData = new FormData();
            formData.append('file', photo);

            const photoUploadPromise = PhotoService.createPhoto(formData)
              .then((photoResponse) => {
                const photoId = photoResponse.data.id;
                const restaurantPhoto = {
                  id: photoId,
                  url: photoResponse.data.url,
                  restaurant: { id: createdRestaurantId },
                };

                return RestoService.addRestaurantPhoto(createdRestaurantId, restaurantPhoto);
              });

            photoUploadPromises.push(photoUploadPromise);
          });

          Promise.all(photoUploadPromises)
            .then(() => {
              console.log('Photos uploaded successfully');
              navigate('/admin/restaurants');
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getAllSpecialites();
    getAllSeries();
    getAllZone();
  }, []);

  useEffect(() => {
    if (id) {
      RestoService.getRestaurantById(id)
        .then((response) => {
          setNom(response.data.nom);
          setAdresse(response.data.adresse);
          setRan__(response.data.ran__);
          setHeure_fermeture(response.data.heure_fermeture);
          setHeure_ouverture(response.data.heure_ouverture);
          setLongitude(response.data.longitude);
          setLatitude(response.data.latitude);
          setSpecialites(response.data.specialites);
          setZone(response.data.zone);
          setPhotos(response.data.photos);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const getAllZone = () => {
    ZoneService.getAllZone()
      .then((response) => {
        setZone(response.data); // Assuming the array of zones is stored in response.data.zones
        console.log(response.data);
        console.log(zone);
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

  const getAllSpecialites = () => {
    SpecialiteService.getAllSpecialites()
      .then((response) => {
        setSpecialite(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const selectedPhotos = selectedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setPhotos(selectedPhotos);
  };
  const title = id ? (
    <h2 className="text-center">Update Restaurant</h2>
  ) : (
    <h2 className="text-center">Add Restaurant</h2>
  );

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              {title}
              <form className="requires-validation" noValidate>
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Nom du restaurant"
                    name="nom"
                    className="form-control"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Adresse du restaurant"
                    name="adresse"
                    className="form-control"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="RAN du restaurant"
                    name="ran"
                    className="form-control"
                    value={ran__}
                    onChange={(e) => setRan__(e.target.value)}
                    required
                  />
                  <input
                    type="time"
                    placeholder="Heure d'ouverture"
                    name="heure_ouverture"
                    className="form-control ipt"
                    value={heure_ouverture}
                    onChange={(e) => {
                      const timeValue = e.target.value;
                      const timeWithSeconds = timeValue + ":00";
                      setHeure_ouverture(timeWithSeconds);
                    }}
                    required
                  />
                  <input
                    type="time"
                    placeholder="Heure de fermeture du restaurant"
                    name="heure_fermeture"
                    className="form-control ipt"
                    value={heure_fermeture}
                    onChange={(e) => {
                      const timeValue = e.target.value;
                      const timeWithSeconds = timeValue + ":00";
                      setHeure_fermeture(timeWithSeconds);
                    }}
                    required
                  />
                  <input
                    type="number"
                    step="0.00001"
                    placeholder="Longitude"
                    name="longitude"
                    className="form-control ipt"
                    value={longitude}
                    onChange={(e) => setLongitude(parseFloat(e.target.value))}
                    required
                  />
                  <input
                    type="number"
                    step="0.00001"
                    placeholder="Latitude"
                    name="latitude"
                    className="form-control ipt"
                    value={latitude}
                    onChange={(e) => setLatitude(parseFloat(e.target.value))}
                    required
                  />
                  <Select
                    options={specialite.map((s) => ({
                      value: s.id,
                      label: s.nom,
                    }))}
                    isMulti
                    placeholder="Sélectionner des spécialités"
                    className='ipt'
                    onChange={handleSpecialtiesChange}
                    value={selectedSpecialties}
                  />
                  <Dropdown>
                    <Dropdown.Toggle className='ipt drpdn'>
                      {selectedZone ? selectedZone.nom : 'Select zone'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {zone && zone.map((zoneItem) => (
                        <Dropdown.Item key={zoneItem.id} onClick={() => handleVilleSelect(zoneItem)}>
                          {zoneItem.nom}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown >
                    <Dropdown.Toggle className='ipt drpdn'>{selectedSerie ? selectedSerie.nom : 'Select serie'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {serie.map((serie) => (
                        <Dropdown.Item key={serie.id} onClick={() => handleSerieSelect(serie)}>
                          {serie.nom}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    type="file"
                    name="photos"
                    className="form-control ipt"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*"
                  />
                </div>

                <div className="form-button mt-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={saveOrUpdateRestaurant}
                  >
                    Save
                  </button>
                  <Link to="/admin/restaurants" className="btn btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantComponent;
