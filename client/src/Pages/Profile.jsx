import React, {Component} from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';


class Profile extends Component {
     state = {
       user:{}
     }

render () {
  return (
    <div>
        <ProfilePage />
    </div>
   );
  }
}


export default Profile;
