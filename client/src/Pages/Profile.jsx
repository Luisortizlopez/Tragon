import React from 'react';
<<<<<<< e619b692fceb5b46c242dd4ef7959bc00957f8a7
<<<<<<< 1d3a09abbcbbb7149757c4b62079173ab38ad02c
<<<<<<< 84b6d1eadaa4520ebe85a517e1282c75b9773843
import ProfilePage from '../components/home/ProfileComp.jsx';

=======
=======
>>>>>>> /*merge problems*/
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';
>>>>>>> /*Fixing mergin problems*/
=======
import ProfilePage from '../components/home/ProfileComp.jsx';
>>>>>>> trying to render avatar in profile page

<<<<<<< 8fa4dd0c5d24fc40af6312ba08ba281f8e5e05ae

=======
>>>>>>> profile page in process
 class Profile extends React.Component {
  state = {
    person: []
  }

  componentDidMount() {
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
    const {picture, name} = this.state.person
    return (
<<<<<<< c238647732a37bab123421f420669429889eded9
      <ProfilePage />
=======
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
    )
  }
}

export default Profile;
