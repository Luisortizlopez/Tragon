import React, {Component} from 'react';
import Select from 'react-select';
<<<<<<< bde9c6751f6e7524e5ca2b8db8de0d4e19054083
import Results from './Results.jsx';
import Home from './HomePage.jsx'
<<<<<<< 625c91583b9b2ce919692702e9944ccfed85914e
=======
=======
import Home from './HomePage.jsx';
<<<<<<< de44d9351c0e984eee47cfd11d52479c46a0a393
<<<<<<< a2d1ac580904371a3dd6230f8e566711c0a02a71
=======
import ProfilePage from '../components/profileComp/ProfileComp.jsx';
>>>>>>> /*merge conflicts*/
=======
>>>>>>> /*Fixing mergin problems*/
import Profile from './Profile.jsx';
>>>>>>> /*Fixing mergin problems*/
=======
import Results from './Results.jsx';
import Home from './HomePage.jsx';
<<<<<<< 087efd0299330de328b743680af824dcb3c4f6cb
>>>>>>> profile page in process
=======
<<<<<<< c238647732a37bab123421f420669429889eded9
=======
import ProfilePage from '../components/profileComp/ProfileComp.jsx';
>>>>>>> /*merge conflicts*/
>>>>>>> /*merge conflicts*/
import Profile from './Profile.jsx';

=======
>>>>>>> profile page in process


export default class HomeContainer extends Component {
  state = {
    vendors: null
  }

  submitSearch = (query) => {
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then(({data}) => {
      this.setState({
        vendors: data
      })
    })
    .catch((error) => {
      console.error(error);
    })
    this.props.history.push(`/search?query=${query}`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.vendors !== nextState.vendors
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route path='/profile' components={Profile} />
        </Switch>
      </div>
    );
  }
}
