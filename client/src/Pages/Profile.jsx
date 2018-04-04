import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';
<<<<<<< bdaca80feb80c2c0d1252ec911311f9edbb26d20
=======

>>>>>>> /*Fixing mergin problems*/

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
