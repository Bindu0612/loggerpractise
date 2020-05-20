import { SET_LOADING, ERROR_LOGS, GET_TECHS, ADD_TECHS, DELETE_TECHS } from './types';


export const getTechs = () =>
    async dispatch => {
        try {
            setLoading();
            const res = await fetch("http://localhost:5000/techs");
            console.log(res);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: GET_TECHS,
                preload: data
            })
        }
        catch (error) {
            dispatch({
                type: ERROR_LOGS
            })
        }
    }

    export const addTechs = (tech)=>  
    async dispatch => {
        try {
            setLoading();
            console.log("data", tech)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tech)
            };
            const result = await fetch('http://localhost:5000/techs', requestOptions)
            const data = await result.json();

            dispatch({
                type: ADD_TECHS,
                preload: data.success
            })
        }
        catch (err) {
            console.log(err);
            dispatch({
                type: ERROR_LOGS,
                // preload: err.data.result
            })
        }
    }

    export const deleteTechs =(techniId)=>
    async dispatch => {
        try{
            console.log("TechninicianId", techniId)
            const requestedOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(techniId)
            };
        
            const url = `http://localhost:5000/techs/${techniId.techniId}`;
            const result  = await fetch(url, requestedOptions)
           const data = await result.json();
        console.log(data,"data")
            dispatch(getTechs())
            
        }
        catch (err) {
            console.log(err);
            dispatch({
                type: ERROR_LOGS,
            })
        }
    }


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
