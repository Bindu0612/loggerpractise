import { GET_LOGS, ADD_LOGS, SET_LOADING, ERROR_LOGS, GET_TECHS, ADD_TECHS } from './types';

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