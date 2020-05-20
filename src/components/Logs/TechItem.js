import React from 'react';
import {deleteTechs} from '../../actions/TechAction';
import {connect} from 'react-redux';

const TechItem = ({tech, deleteTechs})=>{
    const deleteTech = ()=>{
        console.log("method", tech.id)
        deleteTechs({
            "techniId" : tech.id
        })
        
    }
    console.log(tech.firstName)
    return(
        <li className = "collection-item">
           <div className = {tech.lastName ? 'red-text' : 'blue-text'}>
            {tech.firstName}
            </div>
            <br/>

            <span className ='grey-text'>
            <span className='black-text'>ID #{tech.id}</span> 
            </span>
            
            <a href ='#!' className = 'secondary-content'>
                <i className = 'material-icons grey-text' onClick = {deleteTech} > delete </i>
            </a>
        </li>
    )
}

const mapStateToProps =()=>{
    return{

    }
}
export default connect (mapStateToProps , {deleteTechs})(TechItem);