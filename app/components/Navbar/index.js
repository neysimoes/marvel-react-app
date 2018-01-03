import React from 'react';
import Logo from 'images/marvel.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="topbar">
        <div className="container">
          <img className="topbar-logo" src={Logo} alt="Marvel" />
        </div>
      </div>
    );
  }
}

export default Header;
