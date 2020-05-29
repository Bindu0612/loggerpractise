import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from  "materialize-css/dist/js/materialize.min.js";
import Searchbar from './components/Layouts/Searchbar';
import Logs from './components/Logs/Logs';
import { Route } from 'react-router-dom';
import AddLogs from './components/Logs/AddLogs';  
// import DeleteLogs from './components/Logs/DeleteLogs'; 
import Techs from './components/Logs/Techs';
import AddTechs from './components/Logs/AddTechs';
import EditLogs from './components/Logs/EditLogs';

const App = () =>{
  useEffect(()=>{
    M.AutoInit();
  })

  return(
    <>
    <Searchbar/>
   <Routing/>  
    </>
  )
}

const Routing = ()=> {
 
    return(<div>

      <Route exact path="/" component={Logs} />
      <Route exact path="/AddLogs" component={AddLogs} />
      <Route exact path="/Techs" component={Techs} />
      {/* <Route exact path="/DeleteLogs" component={DeleteLogs} /> */}
      <Route exact path = "/AddTechs" component = {AddTechs} />
      <Route exact path = "/EditLogs/:id" component = {EditLogs} />
  </div>
    )
  }
  

  
export default App;