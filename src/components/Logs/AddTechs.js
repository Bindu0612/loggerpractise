import React, { useState } from 'react';
import '../../../src/App.css';
import { addTechs } from '../../actions/TechAction';
import {connect} from 'react-redux';

const AddTechs = ({ addTechs }) => {
    const [firstName, setfirstName] = useState(null);
    const [lastName, setlastName] = useState(false);
    const [id, setId] = useState(null)


    const onChangeHandler = (e) => {
        console.log(e.target);
    
        switch (e.target.name){
          case "firstName" :
            setfirstName({ [e.target.name]: e.target.value });
            break;
    
            case "lastName" :
                setlastName({ [e.target.name]: e.target.value }); 
            break;

            case "id" :
              setId({ [e.target.name]: e.target.value });
            break;
        }
      }
    

    const onSubmitHandler = (e) => {
    addTechs( {
      "firstName": firstName.firstName,
      "lastName": lastName.lastName,
      "id": id.id   
    })
  }

  return (
    <div className="container">
      <h1 className="text-center"> <span>  ADD YOUR TECHS HERE </span>  </h1>
      <div className="row">

        <form onSubmit={onSubmitHandler} className="col s12">

          <div className="row">
            <div className="input-field col s6">
              <input name="firstName" type="text" data-length="10" 
                onChange={onChangeHandler} />
              <label for="First Name">First Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input name="lastName" type="text" data-length="10"
                onChange={onChangeHandler} />
              <label for="Last Name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input name="id" type="number" data-length="10" 
                onChange={onChangeHandler} />
              <label > Id </label>
            </div>
          </div>
          
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
          </button>
        </form>
      </div>

    </div>

  )
}


const mapStateToProps = (state) => {
    return {
     
    }
  }
  

export default connect( mapStateToProps, { addTechs } )(AddTechs);