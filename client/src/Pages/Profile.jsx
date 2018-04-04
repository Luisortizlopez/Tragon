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
<<<<<<< 357737fb2932834b6ade47a9804a6ca65605ee62
<<<<<<< d885ffb06506d98a21bb556d9c647f0f587c204f
      <div>
      <ProfilePage />
      </div>
=======
      <ProfilePage />
>>>>>>> profile page in process
=======
      <ProfilePage />
>>>>>>> fixed merge conflict
    )
  }
}

export default Profile;
