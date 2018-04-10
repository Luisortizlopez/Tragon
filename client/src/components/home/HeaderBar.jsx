import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


<<<<<<< 45813a3762ab6d90c8e655e366d707d206c983a4
=======

>>>>>>> /*merge conflicts*/
  const HeaderBar = (props) => (
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
<<<<<<< 45813a3762ab6d90c8e655e366d707d206c983a4
            <Link to="/user"><Button id='AvatarVender' label="profile" color="inherit">Profile</Button></Link>
            <Link to="/vendor"><Button id='AvatarVender' label="add-vendor" color="inherit">Add A New Vendor</Button></Link>
            <Button id='/Logout' label='log-out' color='inherit' onClick={this.props.logout}>Logout</Button>
            <Link to="login"><div className='Log'><Button id='Log-in' label="log-in" color="inherit">Login</Button></div></Link>
=======
            <Link to="/search"><Button id='AvatarVender' label="results" color="inherit">Results</Button></Link>
            <Link to="/add"><Button id='AddVendor' color="inherit">Add Vendor</Button></Link>
<<<<<<< 3f0eac23e4dc319d6abfaa654a2b57676ab8edd6
            <Link to="/profile"><Button id='profile' color="inherit">Profile</Button></Link>
>>>>>>> /*merge conflicts*/
=======
            <Link to="/user"><Button id='profile' color="inherit">Profile</Button></Link>
>>>>>>> styling profile component
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
          </Toolbar>
      </AppBar>
    );
  }
}
