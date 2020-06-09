import React, {useState,useEffect} from 'react';
import {getSingleLog } from '../../actions/logAction';
import {connect} from 'react-redux';
import {editLogs} from '../../actions/logAction';

const EditLogs = ({getSingleLog, log: {singleLog,loading}, editLogs, ...props})=>{
  const [message, setMessage] = useState(null);
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState(null);
  const [status, setStatus] = useState(true);
   
//   const [id, setId] = useState(null);
console.log(props);
console.log(singleLog);



useEffect(()=>{
    
    if(singleLog==undefined){
      getSingleLog(props.match.params.id)
      console.log(singleLog);
    } 
    if(singleLog != undefined && status){
     setMessage(singleLog.message)
     setAttention(singleLog.attention)
     setTech(singleLog.tech)
     setStatus(false)
     console.log(message);
    }          
        })
        

      
const onChangeHandler = (e) => {
  e.preventDefault();
  console.log(e.target);

  switch (e.target.name) {
    case "message":
      // setMessage({ [e.target.name]: e.target.value });
      setMessage(e.target.value);
      break;

    case "attention":
      e.target.checked ? setAttention( true ) : setAttention( false )
      break;

    case "tech":
      // setTech({ [e.target.name]: e.target.value });
      setTech(e.target.value);
      break;

    // case "id":
    //   setId({ [e.target.name]: e.target.value });
    //   break;
  }
}

const onSubmitHandler = (e) => {
  e.preventDefault();
  // let date = new Date();

  editLogs({
    "message": message,
    "attention": attention,
    "tech": tech,
    "id" : singleLog.id
  })
}


         

return(

    <div className = 'container'>

<form onSubmit={onSubmitHandler} className="col s12">

<div className="row">
  <div className="input-field col s6">
    <input name="message" onChange ={onChangeHandler} type="text" data-length="10"
      value = {message} />
    
  </div>
</div>

<div className="row">
  <div className="input-field col s6">
    <input name="attention" onChange ={onChangeHandler} type="text" data-length="10"
      value = {attention} />
   
  </div>

  <div>
    <button > Update </button>
  </div>
</div>


<div className="row">
  <div className="input-field col s6">
    <input name="tech" onChange ={onChangeHandler}
    type="text" data-length="10"
      value = {tech} />
 
  </div>
</div>
</form>

</div>
) 

// else{
//   return(
//     <h2> Loading... </h2>
//   )
// }

}

const mapStateToProps = (state) => {
    console.log(state)
    return{
    log:state.log
    } 
 }


export default connect(mapStateToProps, {editLogs,getSingleLog})(EditLogs);