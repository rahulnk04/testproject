import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllEmployee } from "../../Actions/EmployeeAction";
import Loading from '../Layout/Loading';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllEmploye = ({history}) => {

    const dispatch = useDispatch();
    const { loading, error, allEmployee } = useSelector((state) => state.employeeAll);
    
    useEffect(() => {
        if (error) {
            window.alert(error);
        }
        dispatch(getAllEmployee());
        // eslint-disable-next-line 
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <Loading/>
            ):(
                <Fragment>
                    <br/>
                    <TableContainer component={Paper}>
                        <Table size="small" sx={{ minWidth: 650 , background:"#f8f9fa" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{fontWeight:"bold"}}>
                                        Employee Name
                                    </TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>
                                        Employee Age
                                    </TableCell>
                                    <TableCell style={{fontWeight:"bold"}}>
                                        Employee Role
                                    </TableCell>
                                    <TableCell align="right" style={{fontWeight:"bold"}}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allEmployee.map((data, index)=>(
                                    <TableRow key={index}>
                                        <TableCell>
                                            {data.empName}
                                        </TableCell>
                                        <TableCell>
                                            {data.empAge}
                                        </TableCell>
                                        <TableCell>
                                            {data.empRole}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button onClick={()=>{
                                                history.push(`/employee/${data._id}`)
                                            }} size="small" variant="outlined">Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fragment>    
            )}
        </div>
    )
}

export default AllEmploye
