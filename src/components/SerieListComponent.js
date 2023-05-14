import React, { useState, useEffect } from 'react'
import SerieService from '../services/SerieService'
import { Link } from 'react-router-dom'

const SerieListComponent = () => {
    const [serie, setSerie] = useState([])


    useEffect(() => {

        getAllSeries();
    }, [])

    const getAllSeries = () => {
        SerieService.getAllSeries().then((response) => {
            setSerie(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteSerie = (serieId) => {
        SerieService.deleteSerie(serieId).then((response) => {
            getAllSeries();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div class="container-xl container1">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-5">
                                <h2><b>Series</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <Link to="/series/add-serie" className="btn btn-primary mb-2"> <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New Serie</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Serie Name </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                serie.map(
                                    serie =>
                                        <tr key={serie.id}>
                                            <td> {serie.id} </td>
                                            <td> {serie.nom} </td>
                                            <td>
                                                
                                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => deleteSerie(serie.id)}>&#xE5C9;</i></a>
                                                <Link to={`/edit-city/${serie.id}`} ><a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a></Link>

                                               
                                                
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SerieListComponent