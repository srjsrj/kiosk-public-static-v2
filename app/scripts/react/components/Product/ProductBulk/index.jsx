import React, { Component, PropTypes } from 'react';
import TextInput from '../../common/TextInput';

const MIN_WEIGHT = 0.01;

class ProductBulk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1.00'
    };
  }
  onWeightChange(e) {
    var value = parseFloat(e.target.value)
    if (value < MIN_WEIGHT){
      value = MIN_WEIGHT
    }
    this.setState({
      value: value
    });
    this.props.onWeightChange(value);
  }
  render() {
    const { t } = this.props;

    return (
      <span>
        <span>{t('vendor.product.weight')}</span>
        <input type="number"
          className="string form-control"
          name="cart_item[weight]"
          value={this.state.value}
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
