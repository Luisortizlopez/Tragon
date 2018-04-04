import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';


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
