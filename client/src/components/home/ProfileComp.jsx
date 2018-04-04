import React from 'react';
import Avatar from 'material-ui/Avatar';
<<<<<<< b75dc5e9b802b3ff568b161eb3cdde03f8f0396a
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
import RatingStars from './RatingComp.jsx'
=======

>>>>>>> /*merge conflicts*/


const style = {
    width: 160,
    height: 160,
}


const ProfilePage = (props) => (
<<<<<<< b75dc5e9b802b3ff568b161eb3cdde03f8f0396a
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "#94b8b8"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='userName' />
    <RatingStars />
   </Card>
 </div> )

=======
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
 </div>

);
>>>>>>> /*merge conflicts*/

export default ProfilePage;
