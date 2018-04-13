import React from 'react';
import Avatar from 'material-ui/Avatar';
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';


const style = {
    width: 160,
    height: 160,
}



const ProfilePage = (props) => (
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "rgba (252,247,255, 0.7)"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/profilepic.jpg' className='Picture' />
    <UserName id='userName' />
   </Card>
 </div>
);


export default ProfilePage;
