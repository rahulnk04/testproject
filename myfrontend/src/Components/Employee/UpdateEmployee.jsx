import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Layout/Loading';
import { clearErrors, updateEMP} from "../../Actions/EmployeeAction";
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { UPDATE_PROFILE_RESET } from '../../Constants/EmployeeConstants';

const UpdateEmployee = ({emp}) => {
    const dispatch = useDispatch();
    const { error, isUpdated, loading } = useSelector((state) => state.updateEmployee);
    const [empData , setEmpData] = useState(emp);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setEmpData(prevState => ({
            ...empData,
            [name]: value
        }));
    };

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEMP(empData));
    };
    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            window.alert(error);
        }
        if (isUpdated) {
            window.alert("Profile Updated Successfully");
        
            dispatch({
              type: UPDATE_PROFILE_RESET,
            });
          }
    }, [dispatch,isUpdated,error]);


    return (
        <Fragment>
            {loading ? (
                <Loading/>
            ) : (
                <Fragment>
        <div id="alert-dialog-description" style={{ paddingLeft:"2%", paddingRight:"2%"}}>
            <form className="loginForm" onSubmit={updateProfileSubmit}>
                <div>
                    <div style={{width:400}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Employee Name"
                        label="Employee Name"
                        name="empName"
                        value={empData.empName}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Employee Age"
                        label="Employee Age"
                        name="empName"
                        value={empData.empAge}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="name"
                        label="Employee Salary"
                        name="empSalary"
                        value={empData.empSalary}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Employee Role"
                        label="Employee Role"
                        name="empRole"
                        value={empData.empRole}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Attribute ID"
                        label="Attribute ID"
                        name="attrId"
                        value={empData.attrId}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Attribute Class"
                        label="Attribute Class"
                        name="attrClass"
                        value={empData.attrClass}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Attribute Size"
                        label="Attribute Size"
                        name="attrSize"
                        value={empData.attrSize}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="Attribute Name"
                        label="Attribute Name"
                        name="attrName"
                        value={empData.attrName}
                        // autoFocus
                        size="small"
                        onChange={handleChange}
                    />
                    </div>
                
                    <div>
                    <Fab style={{width:"100%", marginTop:"4%"}} type="submit" variant="extended" size="small" color="primary" aria-label="add">
                        Update Profile
                    </Fab>
                    </div>

                </div>
            </form>
        </div>
                </Fragment>
            )}
       

        </Fragment>
    )
}

export default UpdateEmployee
