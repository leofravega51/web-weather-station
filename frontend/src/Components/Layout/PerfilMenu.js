import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FallbackAvatars from './FallbackAvatars'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';



export default function PerfilMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  // useEffect(() => {

  //   const {sendEmail} = require('../Auth/mail');

  //   app.post("/api/sendMail", (req, res) =>{

  //       console.log(req.body);

  //       sendEmail(req.body.email, req.body.name, "hello");

  //   })
    
        
  // });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    if(localStorage.getItem("isLogged")){
      localStorage.setItem("isLogged", false);
      history.push('/');
    }
  }


  return (
    <nav className="nav-wrapper grey darken-3">
            <div className="container col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/" className="brand-logo">Weather Station</Link>
                    </div>
                        {/* <SignedInLinks /> */}
                    <div className="col-md-7">
                        <Link to="/about" style={{marginRight: "10%", fontSize : 20}}>About</Link>
                        <Link to="/contact" style={{marginRight: "10%", fontSize : 20}}>Contact</Link>
                        <Link to="/documentation" style={{marginRight: "10%", fontSize : 20}}>Documentation</Link>
                    </div>

                    <div style={{float : "right"}} className="col-md-1">
                      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <FallbackAvatars />
                      </Button>

                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={onLogout}>Logout</MenuItem>
                      </Menu>
                  </div>
                </div>
            </div>
        </nav>


    
  );
}