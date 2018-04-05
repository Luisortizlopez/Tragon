import React from 'react';
import Avatar from 'material-ui/Avatar';
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
<<<<<<< abc7ab39a11234b41d91ef1a4dcaeebfce0ed587



=======
>>>>>>> added card background to profile info

const style = {
    width: 160,
    height: 160,
}



const ProfilePage = (props) => (
  <div>
<<<<<<< abc7ab39a11234b41d91ef1a4dcaeebfce0ed587
    <Card className='ProfileCard' style={{backgroundColor: "#E6E6FA"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='UsersName' />
=======
    <Card className='ProfileCard' style={{backgroundColor: "#94b8b8"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='userName' />
>>>>>>> added card background to profile info
   </Card>
 </div>
);


export default ProfilePage;
