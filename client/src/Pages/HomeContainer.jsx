import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
import Results from './Results.jsx';
import Home from './HomePage.jsx';
import Profile from './Profile.jsx';

<<<<<<< de011d176d58bd40aeaeb464e7fde63bbf2a90f7
<<<<<<< 98c539d8ce26ee7da541a5c028b2551e687a1628





=======
import Profile from './Profile.jsx';

>>>>>>> profile page in process
>>>>>>> profile page in process
=======
>>>>>>> /*merge conflicts*/
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
