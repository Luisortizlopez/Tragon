import React from 'react';
import Avatar from 'material-ui/Avatar';
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
import RatingStars from './RatingComp.jsx'


const style = {
    width: 160,
    height: 160,
}



const ProfilePage = (props) => (
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "#E6E6FA"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='UsersName' />
    <RatingStars />
   </Card>
 </div> )


export default ProfilePage;
