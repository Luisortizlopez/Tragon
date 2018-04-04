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
      <div>
      <ProfilePage />
      </div>
    )
  }
}

export default Profile;
