import axios from 'axios';
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
    CLEAR_ERRORS
} from '../Constants/EmployeeConstants';

const errorfail=(err)=>{
    if (err.response.data.error){
        return err.response.data.error.message
    }
    return err.response.data.message
}

export const getAllEmployee = ()=>async(dispatch)=>{
    try{
        dispatch({
            type:ALL_EMPLOYEE_REQUEST, 
        })
        
        const API_URL=`/myproj/api/v1/allemployee`

        const {data} = await axios.get(API_URL)
        dispatch({
            type:ALL_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ALL_EMPLOYEE_FAIL,
            payload:errorfail(error)
            // payload: error.response.data.error.message || error.response.data.message
            // payload: error.response.data.message,
        });
    }    
}
export const getEmployeeDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:EMPLOYEE_DETAILS_REQUEST, 
        })
        const {data} = await axios.get(`/myproj/api/v1/employee/${id}`)
        dispatch({
            type:EMPLOYEE_DETAILS_SUCCESS,
            payload:data.employee
        })
    }catch(error){
        dispatch({
            type:EMPLOYEE_DETAILS_FAIL,
            payload: errorfail(error)
            // payload: error.response.data.message,
        });
    }    
}

export const updateEMP = (empData) => async(dispatch) => {
    try {
        dispatch({ type: EMPLOYEE_UPDATE_REQUEST });
        
        const id = empData._id
  
        const { data } = await axios.put(`/myproj/api/v1/employee/${id}`, empData);
  
        dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: EMPLOYEE_UPDATE_FAIL,
            payload: error.response.data.message,
        });
    }
  };


export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
    })
}