import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';


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
      <ProfilePage />
    )
  }
}

export default Profile;
