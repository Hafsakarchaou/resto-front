
import React, { useState, useEffect } from 'react'
import SpecialiteService from '../services/SpecialiteService'
import { Link } from 'react-router-dom'
import HeaderComponent from "./HeaderComponent"; 

const ListSpecialiteComponent = () => {
    const [specialite, setSpecialite] = useState([])


    useEffect(() => {

        getAllSpecialites();
    }, [])

    const getAllSpecialites = () => {
        SpecialiteService.getAllSpecialites().then((response) => {
            setSpecialite(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    {/* const deleteSpecialite = (specialiteId) => {
        SpecialiteService.deleteSpecialite(specialiteId).then((response) =>{
            getAllSpecialites();
 
        }).catch(error =>{
            console.log(error);
        })
         
     } */}
    const deleteSpecialite = async (specialiteId) => {

        SpecialiteService.deleteSpecialite(specialiteId).then((response) => {
            getAllSpecialites();

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
                                <h2><b>Speciliaties</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <Link to="add-specialite" className="btn btn-primary mb-2"> <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New Speciality</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Specialite Name </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                specialite.map(
                                    specialite =>
                                        <tr key={specialite.id}>
                                            <td> {specialite.id} </td>
                                            <td> {specialite.nom} </td>
                                            <td>
                                                
                                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => deleteSpecialite(specialite.id)}>&#xE5C9;</i></a>
                                                <Link to={`/admin/edit-specialite/${specialite.id}`} ><a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a></Link>

                                               
                                                
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
            <h2 className='text-center'>List Specialites</h2>
            <Link to="add-specialite" className="btn btn-primary mb-2"> Ajouter une specialite </Link>
            <table className="table table-bordered table-striped">
                    <thead>
                        <th> Specialite Id </th>
                        <th> Specialite Name </th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                    {
                            specialite.map(
                                specialite =>
                                <tr key = {specialite.id}> 
                                    <td> {specialite.id} </td>
                                    <td> {specialite.nom} </td>
                                    <td>
                                    <Link className="btn btn-info" to={`/edit-specialite/${specialite.id}`} >Update</Link>
                                        <button className = "btn btn-danger" 
                                        style = {{marginLeft:"10px"}} onClick = {() => deleteSpecialite(specialite.id)}> Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
    
            
                    </div>*/


    )
}

export default ListSpecialiteComponent
