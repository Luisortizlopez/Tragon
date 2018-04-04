import React from 'react';
import Avatar from 'material-ui/Avatar';
<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
=======


>>>>>>> trying to render avatar in profile page
=======


>>>>>>> /*merge conflicts*/
=======


>>>>>>> trying to render avatar in profile page

const style = {
    width: 160,
    height: 160,
}


<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f

const ProfilePage = (props) => (
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "#94b8b8"}}>
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/TragonComiendo.jpg' className='Picture' />
    <UserName id='userName' />
   </Card>
 </div>
=======
=======
>>>>>>> /*merge conflicts*/
=======
>>>>>>> trying to render avatar in profile page
const ProfilePage = (props) => (
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
 </div>

<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
>>>>>>> trying to render avatar in profile page
=======
>>>>>>> /*merge conflicts*/
=======
>>>>>>> trying to render avatar in profile page
);

export default ProfilePage;
