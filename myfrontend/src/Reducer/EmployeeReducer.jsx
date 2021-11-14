import {
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,
    // EMPLOYEE_CREATE_REQUEST,
    // EMPLOYEE_CREATE_SUCCESS,
    // EMPLOYEE_CREATE_FAIL,
    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
    UPDATE_PROFILE_RESET,
    CLEAR_ERRORS
} from '../Constants/EmployeeConstants';

export const employeeReducer = (state = { allEmployee: [] }, action)=>{
    switch (action.type){
        case ALL_EMPLOYEE_REQUEST:
            return {                
                loading:true,
                allEmployee:[]
            }
        case ALL_EMPLOYEE_SUCCESS:
            return {                
                loading:false,
                allEmployee:action.payload.employee,
            }
        case ALL_EMPLOYEE_FAIL:
            return {                
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state
    }
}

export const employeeDetailReducer = (state = { employeeDetails: {} }, action)=>{
    switch (action.type){
        case EMPLOYEE_DETAILS_REQUEST:
            return {                
                loading:true,
                ...state,
            }
        case EMPLOYEE_DETAILS_SUCCESS:
            return {                
                loading:false,
                employeeDetails:action.payload

            }
        case EMPLOYEE_DETAILS_FAIL:
            return {                
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state
    }
}

export const updateEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EMPLOYEE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case EMPLOYEE_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
    
        default:
            return state;
    }
}