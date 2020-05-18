import React from 'react';

const LogItem = ({log})=>{
    console.log(log)
    return(
        <li className = "collection-item">
           <div className = {log.attention ? 'red-text' : 'blue-text'}>
            {log.message}
            </div>
            <br/>

            <span className ='grey-text'>
            <span className='black-text'>ID #{log.id}</span> last updated by{' '}
            <span className='black-text'>{log.tech}</span> on{' '}
            </span><span >{log.date}</span>
            
            <a href ='#!' className = 'secondary-content'>
                <i className = 'material-icons grey-text'> delete </i>
            </a>
        </li>
    )
}


export default LogItem;