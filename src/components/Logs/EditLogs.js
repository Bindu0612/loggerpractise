import React, {useState,useEffect} from 'react';
import {getSingleLog } from '../../actions/logAction';
import {connect} from 'react-redux';

const EditLogs = ({getSingleLog, log: {singleLog,loading}, ...props})=>{
  
    const [message, setMessage] = useState(null);
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState(null);
//   const [id, setId] = useState(null);
console.log(props);
console.log(singleLog);



useEffect(()=>{
    console.log(singleLog);
        getSingleLog(props.match.params.id)
        console.log(getSingleLog);
        }, [])
        

const onSubmitHandler =()=>{

}

const onChangeHandler = () =>{

}

if(singleLog!= undefined){
  // setMessage({ messsage: singleLog.message })
  // setAttention({ attention: singleLog.attention })
  // setTech({ tech: singleLog.tech })            

return(

    <div className = 'container'>

<form onSubmit={onSubmitHandler} className="col s12">

<div className="row">
  <div className="input-field col s6">
    <input name="message" type="text" data-length="10"
      value = {singleLog.message} />
    {/* <label for="Message">Message</label> */}
  </div>
</div>

<div className="row">
  <div className="input-field col s6">
    <input name="attention" type="text" data-length="10"
      value = {singleLog.attention} />
    {/* <label for="Attention">Attention</label> */}
  </div>
</div>


<div className="row">
  <div className="input-field col s6">
    <input name="tech" 
    type="text" data-length="10"
      value = {singleLog.tech} />
    {/* <label for="Tech">Tech</label> */}
  </div>
</div>
</form>

</div>
) 
}
else{
  return(
    <h2> Loading... </h2>
  )
}

}

const mapStateToProps = (state) => {
    console.log(state)
    return{
    log:state.log
    } 
 }


export default connect(mapStateToProps, {getSingleLog})(EditLogs);