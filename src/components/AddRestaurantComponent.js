import React from 'react'
import { useState, useEffect } from 'react'
import RestoService from '../services/RestoService'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';


const AddRestaurantComponent = () => {
    const [nom, setNom] = useState('')
    const [adresse, setAdresse] = useState('')
    const [ran__, setRan__] = useState('')
    const [heure_ouverture, setHeure_ouverture] = useState('')
    const [heure_fermeture, setHeure_fermeture] = useState('')
    const [specialites, setSpecialites] = useState([])
    const [zone, setZone] = useState('')
    const [photos, setPhotos] = useState([])
    const [serie, setSerie] = useState([])
    const specialtiesList = [
        { id: 1, name: "Pizza" },
        { id: 2, name: "Sushi" },
        { id: 3, name: "Burger" },
        { id: 4, name: "Cuisine chinoise" },
        { id: 5, name: "Cuisine indienne" },
        // Add more specialties here
    ];

    const [selectedSpecialties, setSelectedSpecialties] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();
    const handleSpecialtyChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedSpecialties(selectedOptions);
      };
    const saveOrUpdateRestaurant = (e) => {
        e.preventDefault();

        const restaurant = {
            nom,
            adresse,
            ran__,
            heure_ouverture,
            heure_fermeture,
            serie,
            specialites,
            zone,
            photos
        }

        if (id) {
            RestoService.updateRestaurant(id, restaurant).then((response) => {
                navigate('/restaurants')
            }).catch(error => {
                console.log(error)
            })

        } else {
            RestoService.createRestaurant(restaurant).then((response) => {
                console.log(response.data)
                navigate('/restaurants')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if (id) {
            RestoService.getRestaurantById(id).then((response) => {
                setNom(response.data.nom)
                setAdresse(response.data.adresse)
                setRan__(response.data.ran__)
                setHeure_fermeture(response.data.heure_fermeture)
                setHeure_ouverture(response.data.heure_ouverture)
                setSpecialites(response.data.specialites)
                setZone(response.data.zone)
                setPhotos(response.data.photos)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    const title = id ? <h2 className="text-center">Update Restaurant</h2> : <h2 className="text-center">Add Restaurant</h2>;

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
                                        className="form-control"
                                        value={heure_ouverture}
                                        onChange={(e) => setHeure_ouverture(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="time"
                                        placeholder="Heure de fermeture du restaurant"
                                        name="heure_fermeture"
                                        className="form-control"
                                        value={heure_fermeture}
                                        onChange={(e) => setHeure_fermeture(e.target.value)}
                                        required
                                    />

                                    <select
                                        className="form-control"
                                        name="zone"
                                        value={zone}
                                        onChange={(e) => setZone(e.target.value)}
                                        required
                                    >
                                        <option value="">Choisir une zone</option>

                                    </select>

                                    <select
                                        className="form-control"
                                        name="serie"
                                        value={zone}
                                        onChange={(e) => setSerie(e.target.value)}
                                        required
                                    >
                                        <option value="">Choisir une serie</option>

                                    </select>

                                    <h3>Choisir les spécialités:</h3>
                                    {specialtiesList.map(specialty => (
                                        <div key={specialty.id}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={specialty.name}
                                                    checked={selectedSpecialties.includes(specialty.name)}
                                                    onChange={handleSpecialtyChange}
                                                />
                                                {specialty.name}
                                            </label>
                                        </div>
                                    ))}
                                    <input
                                        type="file"
                                        name="photos"
                                        className="form-control"
                                        onChange={(e) => setPhotos(e.target.files)}
                                        multiple
                                        accept="image/*"
                                    />


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddRestaurantComponent