import React, {useEffect} from 'react';
import PreLoader from '../Layouts/PreLoader';
import {connect} from 'react-redux';
import {getTechs} from '../../actions/TechAction';
import TechItem from './TechItem';

const TechData = ({tech : {techs, loading}, getTechs})=>{
    
    useEffect(()=>{
        getTechs();
    }, [])

    if(loading || techs == null){
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
                <h4 className = 'center'> Techs </h4>
            </li>
            {!loading && techs.length == 0 ?
            <p> No techs to Display </p> :
            techs.map ((data)=>{
                return (
                    <TechItem tech = {data}/>
                )
            })}

        </ul>
    </div>
)
}

const mapStateToProps = (state) => {
   console.log(state)
   return{
    tech:state.log
   } 
}
export default connect(mapStateToProps, {getTechs})(TechData) ;