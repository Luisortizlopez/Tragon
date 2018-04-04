import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
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
>>>>>>> profile page in process
import Profile from './Profile.jsx';


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
