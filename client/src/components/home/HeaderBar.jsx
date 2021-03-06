import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


  const HeaderBar = (props) => (
      <AppBar id='appBar'>

          <Toolbar>

            <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
            <Link to="/user/:id"><Button id='AvatarVender' label="profile" color="inherit">Profile</Button></Link>
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>

          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
