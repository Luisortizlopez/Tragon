import React, {Component} from 'react';
import Select from 'react-select';
<<<<<<< 919203272d76756a715454767cd153aa232841b2
=======
import {Switch, Route, withRouter} from 'react-router-dom';

>>>>>>> working in HomeContainer
import Results from './Results.jsx';
import Home from './HomePage.jsx'

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
<<<<<<< 919203272d76756a715454767cd153aa232841b2
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
=======
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route render={(props) => <Results {...props} vendors={this.state.vendors} /> } />
        </Switch>
>>>>>>> working in HomeContainer
      </div>
    );
  }
}
