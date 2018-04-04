import React from 'react';
import Avatar from 'material-ui/Avatar';
<<<<<<< 58eb8fb0fe63269b124606d332f77b5e73ddf72f
<<<<<<< fa0040e581db14b9e09d460004591f322f5e7ecd
<<<<<<< ae129cf9192ac6f4462a26be83622ed478b5160f
<<<<<<< 909d8c0704754faa24efaa29405a7dfa6e288f2e
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
=======
=======
=======
=======
<<<<<<< ababadb2bd139d88486de3ebbcc768e1297ed142
>>>>>>> trying to render avatar in profile page
<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
>>>>>>> trying to render avatar in profile page
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
>>>>>>> /*merge conflicts*/
<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
=======


>>>>>>> trying to render avatar in profile page
<<<<<<< ae129cf9192ac6f4462a26be83622ed478b5160f
>>>>>>> trying to render avatar in profile page
=======
=======


>>>>>>> /*merge conflicts*/
<<<<<<< fa0040e581db14b9e09d460004591f322f5e7ecd
>>>>>>> /*merge conflicts*/
=======
=======


>>>>>>> trying to render avatar in profile page
<<<<<<< 58eb8fb0fe63269b124606d332f77b5e73ddf72f
=======
=======


>>>>>>> trying to render avatar in profile page
>>>>>>> trying to render avatar in profile page

const style = {
    width: 160,
    height: 160,
}


<<<<<<< ababadb2bd139d88486de3ebbcc768e1297ed142
<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
<<<<<<< 7dea444af3b1b1e974eb877e5acac3ce9cedad2f

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
=======
=======
>>>>>>> /*merge conflicts*/
=======
>>>>>>> trying to render avatar in profile page
=======
>>>>>>> trying to render avatar in profile page
const ProfilePage = (props) => (
  <div className='UserAvatar'>
    <Avatar style={style} alt='UserAvatar' src='../css/TragonComiendo.jpg' className='Picture' />
 </div>

<<<<<<< ababadb2bd139d88486de3ebbcc768e1297ed142
<<<<<<< 583ae7d11696aaeaa5276cf28af8f6287267cfb2
<<<<<<< 9a075c964c58c78ef5d777f6e95d7ecc86ae0841
>>>>>>> trying to render avatar in profile page
=======
>>>>>>> /*merge conflicts*/
=======
>>>>>>> trying to render avatar in profile page
=======
>>>>>>> trying to render avatar in profile page
);
>>>>>>> /*merge conflicts*/

export default ProfilePage;
