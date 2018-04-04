import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';


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
