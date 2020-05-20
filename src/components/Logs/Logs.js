import React, {useEffect} from 'react';
import LogItem from './LogItem';
import PreLoader from '../Layouts/PreLoader';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logAction';

const Logs = ({log : {logs, loading}, getLogs})=>{
    
    useEffect(()=>{
        getLogs();
    }, [])

    if(loading || logs == null){
        return(
            <div className ="container">
                <PreLoader/>
            </div>
        )
    }


return(
    <div className = 'container'>
        <ul className = 'collection with-header'>
            <li className ='collection-header'>
                <h4 className = 'center'> System Logs </h4>
            </li>
            {!loading && logs.length == 0 ?
            <p> No Logs to Display </p> :
            logs.map ((data)=>{
                return (
                    <LogItem logData = {data}/>
                )
            })}

        </ul>
    </div>
)
}

const mapStateToProps = (state) => {
   console.log(state)
   return{
    log:state.log
   } 
}

// Logs.ProtoTypes = {
//     log : PropTypes.object.isRequired
// }
export default connect(mapStateToProps, {getLogs})(Logs) ;