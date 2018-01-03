import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../App/service'

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isLoading: true
    }
  }

  componentDidMount() {
    getCharacters()
      .then(characters => {
        console.log(characters)
        return this.setState({
          characters: characters,
          isLoading: false
        })
      });
  }
  render() {
    return (
      <div>
        <main className="container">
          <h1>
            Home page!
          </h1>
        </main>
      </div>
    );
  }
}

export default connect( state => ({ }) )(HomePage);
