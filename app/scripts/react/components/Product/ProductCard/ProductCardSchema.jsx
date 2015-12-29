import React, { Component, PropTypes } from 'react';
import { schemaOrgMarkup } from '../../../helpers/product';

export default class ProductCardSchema extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    return schemaOrgMarkup(this.props.product);
  }
}