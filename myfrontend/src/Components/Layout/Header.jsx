import React , {Fragment} from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
    return (
        <Fragment>
          <Navbar 
          variant="light"
          expand="sm" 
          sticky="top"
          style={{background:"#fff"}}
          collapseOnSelect
          className="shadow"
          >
            <Navbar.Brand style={{marginLeft:"2%"}}>
              {/* <img src={Daksha} alt={"Logo"} width={160}  />{' '} */}
              {'My Project'}
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <div className="row">
                  <div className="col">
                  <Link style={{textDecoration:"none", color:"#343a40"}} to={`/home`}>
                    <Fab variant="extended" size="small" sx={{ paddingLeft:1, paddingRight:1, textTransform: 'none',paddingTop:0  }} aria-label="add">
                     <HomeIcon style={{fontSize:17}}/> Home
                    </Fab>
                  </Link>
                  </div>
                </div>
 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
    )
}

export default Header
