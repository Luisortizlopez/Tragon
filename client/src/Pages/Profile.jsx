import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';

<<<<<<< 78b5499c5ef91a5ffe368165e798111d339ed8e0
export default class Profile extends Component {
=======

 class Profile extends React.Component {
>>>>>>> profile page in process
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
<<<<<<< 32c0952e5720f7dbf3d90626d54c5a98a0fc00cc
<<<<<<< 7861a6a22543abea8b4ce779d578986b2319f233
<<<<<<< 78b5499c5ef91a5ffe368165e798111d339ed8e0
      <div>
        <ul>
          <AvatarVender name={name} picture={picture} />
        </ul>
      </div>
=======
      <ProfilePage />
>>>>>>> profile page in process
=======
<<<<<<< c238647732a37bab123421f420669429889eded9
      <ProfilePage />
>>>>>>> /*merge conflicts*/
=======
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
    )
  }
}

export default Profile;
