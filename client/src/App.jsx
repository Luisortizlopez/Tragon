import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import {firebaseAuth} from './components/auth/client.js'
=======
>>>>>>> 5561a54c4f29d58627a0537635db49fe1e705319
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

<<<<<<< HEAD
  logout = (e) => {
    e.preventDefault();
    firebaseAuth().signOut().then(() =>{
      setState({
        isAuthenticated: false,
        user: undefined
      })
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
>>>>>>> 5561a54c4f29d58627a0537635db49fe1e705319

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
