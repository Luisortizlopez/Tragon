import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
<<<<<<< 12d1535c179335454132306bda69e5051fd7bec0
import {firebaseAuth} from './components/auth/client.js'
=======
>>>>>>> profile page in process
import HeaderBar from './components/home/HeaderBar.jsx';
import Login from './components/auth/Login.jsx'
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';

export default class App extends Component {
  state = {
    isAuthenticated: false,
    user: undefined
  }

<<<<<<< 3f0eac23e4dc319d6abfaa654a2b57676ab8edd6
  componentDidMount(){
    this.removeAuthListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user: user
        });
      }
    });
  }
=======
const App = ({history}) => (
  <BrowserRouter>
      <div>
        <header>
        <HeaderBar />
        </header>
        <main id="main-content">
        <Switch>
          <Route path="/user" component={Profile} />
          <Route path="/vendor" component={AvatarVender} />
          <Route path="/" component={HomeContainer} />
        </Switch>
        </main>
    </div>
  </BrowserRouter>
)
>>>>>>> styling profile component

  logout = (e) => {
    e.preventDefault();
    firebaseAuth().signOut().then(() =>{
      setState({
        isAuthenticated: false,
        user: undefined
      })
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderBar authenticated={this.state.isAuthenticated} logout={this.logout} />
          <main id="main-content">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/user" component={Profile} />
              <Route path="/vendor" component={AvatarVender} />
              <Route path="/" render={(props) => <HomeContainer {...props} /> } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
