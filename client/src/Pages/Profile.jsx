import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';


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
<<<<<<< d885ffb06506d98a21bb556d9c647f0f587c204f
      <div>
      <ProfilePage />
      </div>
=======
      <ProfilePage />
>>>>>>> profile page in process
    )
  }
}

export default Profile;
