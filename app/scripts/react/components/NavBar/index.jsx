import React, { Component, PropTypes } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header className="b-header">
        <div className="b-header__container">
          <div className="b-header__content">
            <div className="b-header__desc">
              <NavBarContacts />
            </div>
            <div className="b-header__logo">
              <Logo />
            </div>
            <div className="b-header__search">
              <NavBarSearch />
            </div>
            <ClientBar />
          </div>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {

};

NavBar.defaultProps = {

};

export default NavBar;
