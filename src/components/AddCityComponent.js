import React from 'react'
import { useState, useEffect } from 'react'
import VilleService from '../services/VilleService'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';


const AddCityComponent = () => {
    const [nom, setNom] = useState('')
    const [nomError, setNomError] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();

    const saveOrUpdateVille = (e) => {
        e.preventDefault();

        if (!nom) {
            setNomError(true);
            return;
        }

        const ville = { nom }

        if (id) {
            VilleService.updateVille(id, ville).then((response) => {
                navigate('/admin/ville')
            }).catch(error => {
                console.log(error)
            })

        } else {
            VilleService.createVille(ville).then((response) => {
                console.log(response.data)
                navigate('/admin/ville')
            }).catch(error => {
                console.log(error)
            })
        }


    }
    useEffect(() => {

        VilleService.getVilleById(id).then((response) => {
            setNom(response.data.nom)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = id ? <h2 className="text-center">Update City</h2> : <h2 className="text-center">Add City</h2>;
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
                                 type = "text"
                                 placeholder = "Enter nom ville"
                                 name = "nom"
                                 className = {`form-control ${nomError ? 'is-invalid' : ''}`}
                                 value = {nom}
                                 onChange = {(e) => {
                                     setNom(e.target.value);
                                     setNomError(false);
                                 }}
                             >
                             </input>
                            <div className="invalid-feedback">Please enter a city name</div>
                        </div>
                        <div className="form-button mt-3">
                            <button className = "btn btn-success formbtn" onClick = {(e) => saveOrUpdateVille(e)}  id="submit" type="submit">
                                {id ? 'Update City' : 'Add City'}
                                </button>
                            <Link to="/admin/ville" className="btn btn-danger"> Cancel </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    )
};  
export default AddCityComponent;