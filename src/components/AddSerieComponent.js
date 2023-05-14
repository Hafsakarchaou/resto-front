import React from 'react'
import { useState, useEffect } from 'react'
import SerieService from '../services/SerieService'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';

const AddSerieComponent = () => {
    const [nom, setNom] = useState('')
    const [nomError, setNomError] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();

    const saveOrUpdateSerie = (e) => {
        e.preventDefault();

        if (!nom) {
            setNomError(true);
            return;
        }

        const serie = { nom }

        if (id) {
            SerieService.updateSerie(id, serie).then((response) => {
                navigate('/series')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SerieService.createSeries(serie).then((response) => {
                console.log(response.data)
                navigate('/series')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        SerieService.getSerieById(id).then((response) => {
            setNom(response.data.nom)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = id ? <h2 className="text-center">Update Serie</h2> : <h2 className="text-center">Add Serie</h2>;
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
                                        placeholder="Enter nom serie"
                                        name="nom"
                                        className={`form-control ${nomError ? 'is-invalid' : ''}`}
                                        value={nom}
                                        onChange={(e) => {setNom(e.target.value)
                                            setNomError(false);}}
                                        
                                    >
                                    </input>
                                    <div className="invalid-feedback">Please enter a serie name</div>
                                </div>
                                <div className="form-button mt-3">
                                    <button className="btn btn-success formbtn" onClick={(e) => saveOrUpdateSerie(e)} id="submit" type="submit">
                                        {id ? 'Update Serie' : 'Add Serie'}
                                    </button>
                                    <Link to="/series" className="btn btn-danger"> Cancel </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddSerieComponent;
