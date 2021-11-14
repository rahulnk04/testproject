import React, {Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEmployeeDetails } from "../../Actions/EmployeeAction";
import Loading from '../Layout/Loading';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import UpdateEmployee from './UpdateEmployee';
import Dialog from '@mui/material/Dialog';

const ViewEmployee = ({match}) => {
    const dispatch = useDispatch();
    const [updateDailog, setupdateDailog] = useState(false);
    const {loading,  employeeDetails } = useSelector((state) => state.employeeID);
    useEffect(() => {
        // if (error) {
        //  return alert.error(error);
        // }
        dispatch(getEmployeeDetails(match.params.id));
        // eslint-disable-next-line 
    }, [dispatch]);

    const handleUpdateDialogOpen = () => {
        setupdateDailog(true)
    }
    const handleUpdateDialogClose = () => {
        setupdateDailog(false)
    }
    return (
        <div>
            {loading ? (
                <Loading/>
            ):(
               
                <Fragment>
                    <Paper elevation={3} style={{margin:"1%"}}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <h5>
                                            Employee Information :
                                        </h5>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Fab size="small" onClick={handleUpdateDialogOpen} color="primary" aria-label="add">
                                            <EditIcon />
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Employee Name
                                    </TableCell>
                                    <TableCell align="left">{employeeDetails.empName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Employee Age
                                    </TableCell>
                                    <TableCell align="left">{employeeDetails.empAge}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Employee Salary
                                    </TableCell>
                                    <TableCell align="left">{employeeDetails.empSalary}</TableCell>
                                </TableRow>

                                 <TableRow>
                                   <TableCell component="th" scope="row">
                                      Employee Role
                                   </TableCell>
                                   <TableCell style={{textTransform:"capitalize"}} align="left"> {employeeDetails.empRole}</TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell component="th" scope="row">
                                       Attribute ID
                                   </TableCell>
                                   <TableCell  align="left"> {employeeDetails.attrId}</TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell component="th" scope="row">
                                       Attribute Class
                                   </TableCell>
                                   <TableCell align="left"> {employeeDetails.attrClass}</TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell component="th" scope="row">
                                       Attribute Name
                                   </TableCell>
                                   <TableCell align="left"> {employeeDetails.attrName}</TableCell>
                                </TableRow>
                                <TableRow>
                                   <TableCell component="th" scope="row">
                                       Attribute Size
                                   </TableCell>
                                   <TableCell align="left"> {employeeDetails.attrSize}</TableCell>
                                </TableRow>
                                
                          
                            </TableBody>
                        </Table>
                        <Dialog
                            open={updateDailog}
                            onClose={handleUpdateDialogClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div style={{padding:"3%"}}>
                                <UpdateEmployee emp={employeeDetails} />
                            </div>
                    
                        </Dialog>
                    </Paper>
                </Fragment>
            )}
            {/* {JSON.stringify(employeeDetails)} */}
        </div>
    )
}

export default ViewEmployee
