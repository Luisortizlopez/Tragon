import React from 'react';
import Avatar from 'material-ui/Avatar';
<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
<<<<<<< eb393e807f04c39d86490f2f56c432b7d382f19e
<<<<<<< abc7ab39a11234b41d91ef1a4dcaeebfce0ed587



=======
>>>>>>> added card background to profile info
=======
=======


>>>>>>> trying to render avatar in profile page
>>>>>>> trying to render avatar in profile page

const style = {
    width: 160,
    height: 160,
}


<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f

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
=======
const ProfilePage = (props) => (
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
 </div>

>>>>>>> trying to render avatar in profile page
);


export default ProfilePage;
