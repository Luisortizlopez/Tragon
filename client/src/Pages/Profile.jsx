import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';

 class Profile extends React.Component {
  state = {
    person: []
  }


  render() {
    const {picture, name} = this.state.person
    return (
      <div>
      <ProfilePage />
      </div>
    )
  }
}

export default Profile;
