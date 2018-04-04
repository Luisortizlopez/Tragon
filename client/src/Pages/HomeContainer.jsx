import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
import Results from './Results.jsx';
import Home from './HomePage.jsx';
<<<<<<< 84b6d1eadaa4520ebe85a517e1282c75b9773843
<<<<<<< c238647732a37bab123421f420669429889eded9
=======
import ProfilePage from '../components/profileComp/ProfileComp.jsx';
>>>>>>> /*merge conflicts*/
=======
>>>>>>> /*Fixing mergin problems*/
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
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
      </div>
    );
  }
}
