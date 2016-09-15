import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import connectToRedux from '../HoC/HoC/connectToRedux';
import provideTranslations from '../HoC/provideTranslations';
import Wishlist from './Wishlist';

class WishlistContainer extends Component {
  render() {
    return <Wishlist {...this.props} />;
  }
}

WishlistContainer.propTypes = {
  wishlistItems: PropTypes.object.isRequired,
  initialCart: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

/*
export default provideTranslations(connectToRedux(connect(
  (state, ownProps) => {

  }
)(WishlistContainer)));
*/

export default provideTranslations(WishlistContainer);
