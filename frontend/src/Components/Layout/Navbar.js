import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FacebookLogin from '../Auth/Facebook';
import GoogleLogin from '../Auth/Google'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return(
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
                    <div className="col-md-1">
                        <Button aria-controls="simple-menu" style={{color : "white"}} aria-haspopup="true" onClick={handleClick}>
                            Login
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}><FacebookLogin /></MenuItem>
                            <MenuItem onClick={handleClose}><GoogleLogin /></MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;