import React from 'react';
import Avatar from 'material-ui/Avatar';
import UserName from './UserName.jsx';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';





const style = {
    width: 160,
    height: 160,
    borderWidth: "12px"
}


const ProfilePage = (props) => (
  <div>
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "rgba(253,247,255, 0.8)"}}>
    <UserName  />
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/profilepic.jpg' className='Picture' />
   </Card>
 </div>
 <div>
      <Paper className="review" elevation={4}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
      </Paper>
      <Paper className="review" elevation={4}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
      </Paper>
      <Paper className="review" elevation={4}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
      </Paper>
    </div>
</div>
)


export default ProfilePage;
