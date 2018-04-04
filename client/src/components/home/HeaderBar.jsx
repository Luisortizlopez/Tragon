import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

<<<<<<< 340f19094d70e2bb370856c7e7711dada70159b5

  const HeaderBar = () => (
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome' color="white">Home</Button></Link>
<<<<<<< 256c10199f1e3f6c2eb102f12e3cbd74ed62b58d
<<<<<<< 1dee6cc50a62fbf9e73440e4da9e61882c12cda9
=======
<<<<<<< 7da9f120643ad9a29e4a68b5b65f04a92d687660
>>>>>>> /*merge conflicts*/
            <Link to="/user/:id"><Button id='AvatarVender' label="profile" color="white">Profile</Button></Link>
            <Link to="/vendor"><Button id='AvatarVender' label="profile" color="white">AddVendor</Button></Link>
=======
            <Link to="/profile"><Button id='AvatarVender' label="profile" color="white">Profile</Button></Link>
<<<<<<< 256c10199f1e3f6c2eb102f12e3cbd74ed62b58d
<<<<<<< 0629aaadd7b3bf44da456a30b1a355624c33a116
<<<<<<< 20e4ce324db9a7d5a344c0f397e00187fbf677f5
>>>>>>> /*Fixing mergin problems*/
=======
=======
>>>>>>> /*merge conflicts*/
=======
  const HeaderBar = (props) => (
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
            <Link to="/search"><Button id='AvatarVender' label="results" color="inherit">Results</Button></Link>
            <Link to="/add"><Button id='AddVendor' color="inherit">Add Vendor</Button></Link>
            <Link to="/profile"><Button id='profile' color="inherit">Profile</Button></Link>
>>>>>>> trying to render avatar in profile page
>>>>>>> /*merge conflicts*/
<<<<<<< 256c10199f1e3f6c2eb102f12e3cbd74ed62b58d
=======
>>>>>>> /*Fixing mergin problems*/
=======
>>>>>>> /*merge conflicts*/
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
