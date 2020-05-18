import React from 'react';

const TechItem = ({tech})=>{
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
                <i className = 'material-icons grey-text'> delete </i>
            </a>
        </li>
    )
}


export default TechItem;