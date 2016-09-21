import React, { Component } from 'react';

class MenuTopToggleButton extends Component {
  render() {
    return (
      <a 
        className="mmenu-open element--active-opacity"
        href="#nav"
        id="navopen"
      >
        <span className="mmenu-open__tick mmenu-open__tick_f" />
        <span className="mmenu-open__tick mmenu-open__tick_s" />
        <span className="mmenu-open__tick mmenu-open__tick_t" />
      </a>
    );
  }
}

export default MenuTopToggleButton;
