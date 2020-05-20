import { GET_LOGS, ADD_LOGS, SET_LOADING, ERROR_LOGS, GET_TECHS, ADD_TECHS, DELETE_LOGS, DELETE_TECHS } from '../actions/types';
const initialState = {
    logs: null,
    loading: false,
    error: null,
    techs: null
}


export default (state = { initialState }, action) => {
    switch (action.type) {

        case GET_LOGS:
            return {
                ...state,
                logs: action.preload,
                loading: false
            }

        case ADD_LOGS:
            return {
                ...state,
                // logs: action.preload
            }

        case DELETE_LOGS :
            return{
                ...state,
            }

        case GET_TECHS:
            return {
                techs: action.preload,
                loading: false
            }

        case ADD_TECHS:
            return {
                ...state
            }

        case DELETE_TECHS:
            return{
                ...state,
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case ERROR_LOGS:
            return {
                ...state,
                error: "no result"
            }

        

        default:
            return state;
    }
}
