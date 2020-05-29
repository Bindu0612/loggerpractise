import React, {useEffect} from 'react';
import { deleteLogs,editLogs } from '../../actions/logAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {EditLogs} from './EditLogs';

const LogItem = ({logData, deleteLogs, editLogs})=>{
   const deleteLog = (e)=>{
       console.log("method", logData.id)
        deleteLogs ({
            "logId" : logData.id
        })
    }

    const editLog = ()=>{
        editLogs ({
            "editLog": logData.id
        })
    }

    console.log(logData)
    return(
        <li className = "collection-item">
           <div className = {logData.attention ? 'red-text' : 'blue-text'}>
            {logData.message}
            </div>
            <br/>

            <span className ='grey-text'>
            <span className='black-text'>ID #{logData.id}</span> last updated by{' '}
            <span className='black-text'>{logData.tech}</span> on{' '}
            </span><span >{logData.date}</span>
            
            <a href ='#!' className = 'secondary-content'>
           <Link to = {`/EditLogs/${logData.id}`}> <i className = 'material-icons grey-text'> edit </i></Link>
                <i className = 'material-icons grey-text' onClick = {deleteLog}> delete </i>
            </a>
        </li>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
    //  log:state.log
    } 
 }

export default connect (mapStateToProps, {deleteLogs,editLogs})(LogItem);
// export default LogItem;