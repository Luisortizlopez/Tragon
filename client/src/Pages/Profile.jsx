<<<<<<< HEAD
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


=======
import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';

 class Profile extends React.Component {
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

>>>>>>> 5561a54c4f29d58627a0537635db49fe1e705319
export default Profile;
