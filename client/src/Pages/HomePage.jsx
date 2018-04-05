import React, {Component} from 'react';
import Button from 'material-ui/Button';
import SearchBar from '../components/home/SearchBar.jsx';
import LocationMenu from '../components/home/LocationMenu.jsx';
<<<<<<< abc7ab39a11234b41d91ef1a4dcaeebfce0ed587


=======
import ProfilePage from '../components/home/ProfileComp.jsx';
>>>>>>> added card background to profile info


const Home = (props) => (
  <div>
    <SearchBar submitSearch={props.submitSearch} />
    <LocationMenu />
    <ProfilePage />

  </div>
)

export default Home
