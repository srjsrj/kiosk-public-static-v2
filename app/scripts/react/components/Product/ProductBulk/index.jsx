import React, { Component, PropTypes } from 'react';
import TextInput from '../../common/TextInput';
import { findDOMNode } from 'react-dom';

class ProductBulk extends Component {
  constructor(props) {
    super(props);
  }
  onWeightChange(e) {
    var value = parseFloat(e.target.value)
    this.props.onWeightChange(value);
  }
  componentDidMount(){
    $(findDOMNode(this.refs.input)).numeric({ negative: false })
  }
  render() {
    const { t } = this.props;
    return (
      <span>
        <span>{t('vendor.product.weight')}</span>
        <input ref="input" type="text"
          className="string form-control"
          name="cart_item[weight]"
          defaultValue="1.00"
          onChange={this.onWeightChange.bind(this)}
        />
      </span>
    );
  }
}

ProductBulk.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductBulk;
