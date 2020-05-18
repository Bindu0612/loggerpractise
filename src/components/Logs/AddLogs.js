import React, { useState, useEffect } from 'react';
import '../../../src/App.css';
import { addLogs } from '../../actions/logAction';
import { getTechs } from '../../actions/TechAction';
import { connect } from 'react-redux';

const AddLogs = ({ tech: { techs }, addLogs, getTechs }) => {
  const [message, setMessage] = useState(null);
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    getTechs();
  }, [])

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);


    switch (e.target.name) {
      case "message":
        setMessage({ [e.target.name]: e.target.value });
        break;

      case "attention":
        e.target.checked ? setAttention({ attention: true }) : setAttention({ attention: false })
        break;

      case "tech":
        setTech({ [e.target.name]: e.target.value });
        break;

      case "id":
        setId({ [e.target.name]: e.target.value });
        break;
    }
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let date = new Date();
    console.log(message, attention, tech, id);
    console.log(techs);
    addLogs({
      "message": message.message,
      "attention": attention.attention,
      "tech": tech.tech,
      "date": date,
      "id": id.id
    })
  }

  return (
    <div className="container">
      <h1 className="text-center"> <span>  ADD YOUR LOGS HERE </span>  </h1>
      <div className="row">

        <form onSubmit={onSubmitHandler} className="col s12">

          <div className="row">
            <div className="input-field col s6">
              <input name="message" type="text" data-length="10"
                onChange={onChangeHandler} />
              <label for="Message">Message</label>
            </div>
          </div>

          <p>
            <label>
              <input name="attention" type="checkbox" onChange={onChangeHandler} value="true" />
              <span>Need Attention</span>
            </label>
          </p>

          <div className="row">
            <div className="input-field col s6">
              {/* <input name="tech" type="text" data-length="10"
                onChange={onChangeHandler} /> */}
              <select  onChange={onChangeHandler} name="tech">
                {techs != null && 
                   techs.map((data) => {
                      console.log(data);
                      
                      return <option value = {data.firstName + " " + data.lastName } key = {data.firstName}>
                        {data.firstName}
                      </option>
                    })
                  }
{/* 
<option value = "Bindu"> Bindu </option>
<option value = "abc"> abc </option>
<option value = "manu"> manu </option> */}

              </select>
              <label for="Tech">Tech</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="Date" type="date" data-length="10" />
              <label for="Date">Date</label>
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
    tech: state.log
  }
}


export default connect(mapStateToProps, { addLogs, getTechs })(AddLogs);