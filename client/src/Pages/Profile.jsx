import React from 'react';
<<<<<<< de44d9351c0e984eee47cfd11d52479c46a0a393
import ProfilePage from '../components/home/ProfileComp.jsx';

=======
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';
>>>>>>> /*Fixing mergin problems*/

 class Profile extends React.Component {
  state = {
    person: []
  }

  componentDidMount = () => {
    console.log('hello')
    axios.get(`/profile`,{
      params: {
        id: '${id}'
      }
    })
      .then(res => {
        const person = res.data;
        this.setState({ person });

      })
      .catch ((error) => {
        console.log(error)
      })
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
