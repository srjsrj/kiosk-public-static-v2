import React, { PropTypes } from 'react';
import { schemaOrgMarkup } from '../../../helpers/product';

export default class ProductCardSchema {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  render() {
    return schemaOrgMarkup(this.props.product);
  }
}