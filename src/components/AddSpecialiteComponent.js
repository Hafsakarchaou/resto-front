import React from 'react'
import { useState, useEffect } from 'react'
import SpecialiteService from '../services/SpecialiteService'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';


const AddSpecialiteComponent = () => {
    const [nom, setNom] = useState('')
    const [nomError, setNomError] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();
    const title = id ? <h2 className="text-center">Update Speciality</h2> : <h2 className="text-center">Add Speciality</h2>;
    const saveOrUpdateSpecialite = (e) => {
        e.preventDefault();
        if (!nom) {
            setNomError(true);
            return;
        }
        const specialite = { nom }

        if (id) {
            SpecialiteService.updateSpecialite(id, specialite).then((response) => {
                navigate('/admin/specialites')
            }).catch(error => {
                console.log(error)
            })

        } else {
            SpecialiteService.createSpecialites(specialite).then((response) => {
                console.log(response.data)
                navigate('/admin/specialites')
            }).catch(error => {
                console.log(error)
            })
        }


    }
    useEffect(() => {

        SpecialiteService.getSpecialiteById(id).then((response) => {
            setNom(response.data.nom)
        }).catch(error => {
            console.log(error)
        })
    }, [id])
    
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
                                 placeholder = "Enter nom specialite"
                                 name = "nom"
                                 className={`form-control ${nomError ? 'is-invalid' : ''}`}
                                 value = {nom}
                                 onChange = {(e) => {setNom(e.target.value)
                                
                                    setNomError(false);}}
                             >
                             </input>
                             <div className="invalid-feedback">Please enter a specialite name</div>
                        </div>
                        <div className="form-button mt-3">
                            <button className = "btn btn-success formbtn" onClick = {(e) => saveOrUpdateSpecialite(e)}  id="submit" type="submit">
                            {id ? 'Update Speciality' : 'Add Speciality'}
                            </button>
                       <Link to="/admin/specialites" className="btn btn-danger"> Cancel </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    )
};

{/*<div>
    <br /><br />
    <div className = "container">
         <div className = "row">
             <div className = "card col-md-6 offset-md-3 offset-md-3">
             {
                           title()
                       }
                 <div className = "card-body">
                     <form>
                         <div className = "form-group mb-2">
                             <label className = "form-label"> Nom :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter nom specialite"
                                 name = "nom"
                                 className = "form-control"
                                 value = {nom}
                                 onChange = {(e) => setNom(e.target.value)}
                             >
                             </input>
                         </div>
                         <button className = "btn btn-success" onClick = {(e) => saveOrUpdateSpecialite(e)} >Submit </button>
                         <Link to="/specialites" className="btn btn-danger"> Cancel </Link>
                     </form>

                 </div>
             </div>
         </div> 

    </div>

                    </div>*/}



export default AddSpecialiteComponent