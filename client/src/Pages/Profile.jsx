import React from 'react';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class Profile extends React.Component {
  state = {
    person: []
  }

  componentDidMount = () => {
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
      <div>
        {console.log(this.state.person)}
        <ul>
          <CardExampleWithAvatar vendors={this.state.person} picture={this.state.person.picture} />
        </ul>
      </div>
    )
  }
}
