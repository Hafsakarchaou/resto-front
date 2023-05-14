import React, { useState, useEffect } from 'react'
import VilleService from '../services/VilleService'
import { Link } from 'react-router-dom'

const VilleListComponent = () => {
    const [ville, setVille] = useState([])


    useEffect(() => {

        getAllVilles();
    }, [])

    const getAllVilles = () => {
        VilleService.getAllVilles().then((response) => {
            setVille(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteVille = (villeId) => {
        VilleService.deleteVille(villeId).then((response) => {
            getAllVilles();

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
                                <h2><b>Cities</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <Link to="add-city" className="btn btn-primary mb-2"> <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New City</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Ville Name </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ville.map(
                                    ville =>
                                        <tr key={ville.id}>
                                            <td> {ville.id} </td>
                                            <td> {ville.nom} </td>
                                            <td>
                                                
                                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => deleteVille(ville.id)}>&#xE5C9;</i></a>
                                                <Link to={`/edit-city/${ville.id}`} ><a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a></Link>

                                               
                                                
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        /*<div className="container">
             <h2 className='text-center'>List Villes</h2>
            
            <Link to="add-specialite" className="btn btn-primary mb-2"> Ajouter une ville </Link>
            <table className="table table-bordered table-striped">
                    <thead>
                        <th> Ville Id </th>
                        <th> Ville Name </th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                    {
                            ville.map(
                                ville =>
                                <tr key = {ville.id}> 
                                    <td> {ville.id} </td>
                                    <td> {ville.nom} </td>
                                    <td>
                                    <Link className="btn btn-info" >Update</Link>
                                        <button className = "btn btn-danger" 
                                        style = {{marginLeft:"10px"}} > Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
    
            
        </div>*/
    )
}

export default VilleListComponent