import React from 'react';
import Avatar from 'material-ui/Avatar';



const style = {
    width: 160,
    height: 160,
}


const ProfilePage = (props) => (
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
 </div>

);

export default ProfilePage;
