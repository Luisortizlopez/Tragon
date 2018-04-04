import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
import Results from './Results.jsx';
<<<<<<< 075605e6c57cd7ab37bfb74a5fb5b72994355bce
import Home from './HomePage.jsx'
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
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
      </div>
    );
  }
}
