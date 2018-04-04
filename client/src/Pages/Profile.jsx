import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';

export default class Profile extends Component {
  state = {
    person: []
  }



  render() {

    return (
      <div>
      <ProfilePage />
      </div>
    )
  }
}

export default Profile;
