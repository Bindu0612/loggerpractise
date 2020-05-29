import { GET_LOGS, GET_SINGLE_LOG, ADD_LOGS, EDIT_LOGS,  DELETE_LOGS, SET_LOADING, ERROR_LOGS, GET_TECHS, ADD_TECHS, DELETE_TECHS } from '../actions/types';
const initialState = {
    logs: null,
    loading: false,
    error: null,
    techs: null,
    edit:false,
    singleLog : null
}


export default (state = { initialState }, action) => {
    switch (action.type) {

        case GET_LOGS:
            return {
                ...state,
                logs: action.preload,
                loading: false
            }

        case GET_SINGLE_LOG:
            return {
                ...state,
                singleLog : action.preload,
                loading: false
            }

        case ADD_LOGS:
            return {
                ...state,
                // logs: action.preload
            }

        case EDIT_LOGS:
            return{
                ...state,
                edit: true,
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
