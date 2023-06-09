import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import VilleService from '../services/VilleService';
import ZoneService from '../services/ZoneService';

const AddZoneComponent = () => {
    const [nom, setNom] = useState('');
    const [villeOptions, setVilleOptions] = useState([]);
    const [selectedVille, setSelectedVille] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all available cities and set the options for the dropdown
            // Fetch all available cities and set the options for the dropdown
    VilleService.getAllVilles().then((response) => {
        const options = response.data.map((ville) => ({
            id: ville.id,
            nom: ville.nom,
        }));
        setVilleOptions(options);
        console.log(options); 

    }).catch(error => {
        console.log(error);
    });
        if (id) {
            // If an ID is provided, fetch the zone details and set the state variables accordingly
            ZoneService.getZoneById(id).then((response) => {
                setNom(response.data.nom);
                setSelectedVille(response.data.ville.id);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);


    const handleVilleSelect = (selectedValue) => {
        console.log(selectedValue);
        setSelectedVille(selectedValue);
    };
    const saveOrUpdateZone = (e) => {
        e.preventDefault();
        console.log(selectedVille);
    const zone = { nom, ville: selectedVille  };
    

        if (id) {
            ZoneService.updateZone(id, zone).then(() => {
                navigate('/admin/zones');
            }).catch(error => {
                console.log(error);
            });
        } else {
            console.log(zone)
            ZoneService.createZone(zone).then(() => {
                navigate('/admin/zones');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const title = id ? <h2 className="text-center">Update Zone</h2> : <h2 className="text-center">Add Zone</h2>;
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
                                        placeholder="Enter zone name"
                                        name="nom"
                                        className="form-control"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    />
                                    <div className="valid-feedback">Zone name is valid!</div>
                                    <div className="invalid-feedback">Zone name cannot be blank!</div>
                                </div>
                                <div className="col-md-12 ">
                                    {/*<input
                                        type="text"
                                        placeholder="Enter ville id"
                                        name="villeId"
                                        className="form-control"
                                        value={villeId}
                                        onChange={(e) => setVilleId(e.target.value)}
                                    />*/}
                                    {/**************************************************** *
                                    <DropdownButton className="dropdwn" title={selectedVille ? selectedVille.label : 'Select Ville'}>
                                        {villeOptions.map((ville) => (
                                            <Dropdown.Item key={ville.nom} eventKey={ville.nom} onSelect={handleVilleSelect}>
                                                {ville.label}
                                            </Dropdown.Item>
                                        ))}
                                        </DropdownButton> */}
                                    <Dropdown>
                                        <Dropdown.Toggle>{selectedVille ? selectedVille.nom : 'Select Ville'}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {villeOptions.map((ville) => (
                                                <Dropdown.Item key={ville.id} onClick={() => handleVilleSelect(ville)}>
                                                    {ville.nom}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <div className="valid-feedback">Ville id is valid!</div>
                                    <div className="invalid-feedback">Ville id cannot be blank!</div>
                                </div>
                                <div className="form-button mt-3">
                                    <button className="btn btn-success formbtn" onClick={(e) => saveOrUpdateZone(e)} id="submit" type="submit">
                                        {id ? 'Update Zone' : 'Add Zone'}
                                    </button>
                                    <Link to="/admin/zones" className="btn btn-danger">
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

export default AddZoneComponent;