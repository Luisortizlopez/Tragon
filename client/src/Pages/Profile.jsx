import React from 'react';
<<<<<<< 611051f6ecbeb8332bde510fb085749bbf28edc8
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
=======
<<<<<<< de44d9351c0e984eee47cfd11d52479c46a0a393
import ProfilePage from '../components/home/ProfileComp.jsx';

=======
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';
>>>>>>> /*Fixing mergin problems*/
>>>>>>> /*Fixing mergin problems*/

<<<<<<< 8fa4dd0c5d24fc40af6312ba08ba281f8e5e05ae

=======
>>>>>>> profile page in process
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
<<<<<<< c0efbd1a2a669b0b2a880f732b7aba8494e19dbe
<<<<<<< 59c5c71839f5999e5bd11da5620270d82e2030b8
<<<<<<< c238647732a37bab123421f420669429889eded9
      <ProfilePage />
=======
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
=======
      <ProfilePage />
>>>>>>> profile page in process
=======
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
    )
  }
}

export default Profile;
