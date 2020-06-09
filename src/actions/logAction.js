import { GET_LOGS, ADD_LOGS, SET_LOADING, ERROR_LOGS, DELETE_LOGS, GET_SINGLE_LOG } from './types';

export const getLogs = () =>
    async dispatch => {
        try {
            setLoading();
            console.log("getlogs Api");
            const res = await fetch("http://localhost:5000/logs");
            const data = await res.json();
            dispatch({
                type: GET_LOGS,
                preload: data
            })
        }
        catch (error) {
            dispatch({
                type: ERROR_LOGS
            })
        }
    }

export const deleteLogs = (logId) => 
    async dispatch => {
        try{
            console.log("logId", logId)
            const requestedOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(logId)
            };
        
            const url = `http://localhost:5000/logs/${logId.logId}`;
            const result  = await fetch(url, requestedOptions)
           const data = await result.json();
        console.log(data,"data")
            // dispatch({
            //     type : DELETE_LOGS,
            //     // preload : data.success
            // })
            dispatch(getLogs())
            
        }
        catch (err) {
            console.log(err);
            dispatch({
                type: ERROR_LOGS,
                // preload: err.data.result
            })
        }
    }

export const getSingleLog = (id) =>
        async dispatch =>{
            try{
                console.log(id)
                setLoading();
                const result  = await fetch(`http://localhost:5000/logs/${id}`)
                const data = await result.json();
                console.log(data.message)
               
                dispatch({
                 type: GET_SINGLE_LOG,
                 preload: data
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

export const editLogs = (editLog) =>
async dispatch => {
    try{
        console.log("editLog", editLog)
        // let newData = editLog;
        const url = `http://localhost:5000/logs/${editLog.id}`;
        delete editLog.id;
        console.log(editLog);
        const requestedOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editLog)
        };
    
      
        const result  = await fetch(url, requestedOptions)
        const data = await result.json();
        console.log(data,"data")
        dispatch(getLogs());   
    }
    catch (err) {
        console.log(err);
        dispatch({
            type: ERROR_LOGS,
            // preload: err.data.result
        })
    }
}



export const addLogs = (log) =>
    async dispatch => {
        try {
            setLoading();
            console.log("data", log);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(log)
            };
            const result = await fetch('http://localhost:5000/logs', requestOptions)
            const data = await result.json();

            dispatch({
                type: ADD_LOGS,
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


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}