import React from 'react';
import Avatar from 'material-ui/Avatar';
<<<<<<< 6ea53490d68c8c6305ef29d712c229e63905d9b4
<<<<<<< b75dc5e9b802b3ff568b161eb3cdde03f8f0396a
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
import RatingStars from './RatingComp.jsx'
=======

>>>>>>> /*merge conflicts*/

=======
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
>>>>>>> added card background to profile info

const style = {
    width: 160,
    height: 160,
}



const ProfilePage = (props) => (
<<<<<<< 6ea53490d68c8c6305ef29d712c229e63905d9b4
<<<<<<< b75dc5e9b802b3ff568b161eb3cdde03f8f0396a
=======
>>>>>>> added card background to profile info
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "#94b8b8"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='userName' />
<<<<<<< 6ea53490d68c8c6305ef29d712c229e63905d9b4
    <RatingStars />
   </Card>
 </div> )

=======
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
=======
   </Card>
>>>>>>> added card background to profile info
 </div>
);
>>>>>>> /*merge conflicts*/

export default ProfilePage;
