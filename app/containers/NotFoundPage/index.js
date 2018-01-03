import { Component } from 'react';
import { connect } from 'react-redux';

export class NotFoundPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>Página não encontrada</h1>
    );
  }
}

export default connect( state => ({ }) )(NotFoundPage);
