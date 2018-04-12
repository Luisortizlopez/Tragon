import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

export default class HeaderBar extends Component {

  render(){

    const authedBar =
      <Toolbar>
        <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
        <Link to="user"><Button id='AvatarVender' label="profile" color="inherit">Profile</Button></Link>
        <Link to="vendor"><Button id='AvatarVender' label="add-vendor" color="inherit">Add A New Vendor</Button></Link>
        <Button id='logout' label='log-out' color='inherit' onClick={this.props.logout}>Logout</Button>
      </Toolbar>

<<<<<<< HEAD
    const unAuthBar =
      <Toolbar>
        <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
        <Link to="login"><div className='Log'><Button id='Log-in' label="log-in" color="inherit">Login</Button></div></Link>
      </Toolbar>

    return (
      <AppBar id='appBar'>
        {this.props.authenticated ? authedBar : unAuthBar}
=======

  const HeaderBar = (props) => (
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
            <Link to="/search"><Button id='AvatarVender' label="results" color="inherit">Results</Button></Link>
            <Link to="/add"><Button id='AddVendor' color="inherit">Add Vendor</Button></Link>
            <Link to="/user"><Button id='profile' color="inherit">Profile</Button></Link>
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
          </Toolbar>
>>>>>>> 5561a54c4f29d58627a0537635db49fe1e705319
      </AppBar>
    )
  }
}
