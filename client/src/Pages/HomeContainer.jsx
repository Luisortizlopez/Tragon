import React, {Component} from 'react';
import Select from 'react-select';
<<<<<<< 6fb62a3175c63f0088b2fa788b8f58051283a563
import {Switch, Route, withRouter} from 'react-router-dom';
import Results from './Results.jsx';
import Home from './HomePage.jsx';
import Profile from './Profile.jsx';




=======
import Home from './HomePage.jsx';
>>>>>>> added card background to profile info

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
