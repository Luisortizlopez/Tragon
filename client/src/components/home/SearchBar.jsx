import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'material-ui/Button';

export default class SearchBar extends Component {
  state = {
    search: ''
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  newSearch = () => {
    this.props.submitSearch(this.state.search);
    this.setState({
      search: ''
    })
  }

  render() {

    return (
      <div>
        <form className="SearchBar">
        <input
          onChange={this.updateSearch}
          className='FieldInput'
          type="text"
          placeholder="Que se te antoja, paisa?"
          value={this.state.search}
          />
      </form>
      <Button
        type="submit"
        className="SearchButton"
        variant="raised"
<<<<<<< b614b66c746f4b0d710cd6a1734951057da1eb96
        color="primary"
        onClick={this.newSearch}
=======
        style={{ backgroundColor: "#1752c9", color: "white" }}
>>>>>>> styling landing page
        onClick={this.newSearch}>
        Search
      </Button>
    </div>
    )
  }
}
