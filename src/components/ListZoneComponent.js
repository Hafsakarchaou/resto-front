import React from 'react'
import { useState, useEffect } from 'react'
import ZoneService from '../services/ZoneService'
import { Link } from 'react-router-dom'



const ListZoneComponent = () => {
    const [zone, setZone] = useState([])
    const [ville, setVille] = useState([]);


    useEffect(() => {

        getAllZones();
    }, [])

    const getAllZones = () => {
        ZoneService.getAllZones({ expand: "ville" })
            .then((response) => {
                setZone(response.data)
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    const deleteZone = async (zoneId) => {

        ZoneService.deleteZone(zoneId).then((response) => {
            getAllZones();

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
                                <h2><b>Zones</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <Link to="add-zone" className="btn btn-primary mb-2"> <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New Zone</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>city</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {zone.map((zone) => (
                                <tr key={zone.id}>
                                    <td>{zone.id}</td>
                                    <td>{zone.nom}</td>
                                    <td>{zone.ville?.nom}</td>
                                    <td>

                                        <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => deleteZone(zone.id)}>&#xE5C9;</i></a>
                                        <Link to={`/edit-zone/${zone.id}`} ><a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a></Link>



                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListZoneComponent