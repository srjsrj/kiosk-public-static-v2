import { Component, PropTypes } from 'react';
import { getMatchedGood, getUpdatedValues } from './utils';
import HiddenInput from '../../common/HiddenInput';
import ProductAddToCartButton from '../ProductAddToCartButton';
import PropertyList from './PropertyList';

// TODO: i18n
const ADD_TO_CART_BUTTON = 'В корзину';
const NOT_ENOUGH_DATA_BUTTON = 'Выберите характеристику';

export default class ProductProperties extends Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
  }
  static defaultProps = {
    goods: [],
    properties: [],
  }
  state = {
    good: null,
    values: {},
  }
  componentDidUpdate() {
    const { good } = this.state;

    if (good) {
      $(document).trigger('productPhotoChange', good.image_url);
    } else {
      $(document).trigger('productPhotoChange', null);
    }
  }
  updateValues(property, value) {
    const { properties, goods } = this.props;
    const { values } = this.state;

    const newValues = getUpdatedValues(property, properties, values, {
      [property.id]: value
    });
    const newGood = getMatchedGood(properties, goods, newValues)

    this.setState({
      good: newGood,
      values: newValues
    });
  }
  render() {
    const { good, values } = this.state;

    return (
      <span>
        <PropertyList
          goods={this.props.goods}
          onChange={this.updateValues.bind(this)}
          properties={this.props.properties}
          values={values}
        />
        {good &&
          <HiddenInput name="cart_item[good_id]" value={good.global_id} />
        }
        {!!this.props.properties.length &&
          <div className="b-item-full__form__row b-item-full__form__submit">
            <ProductAddToCartButton
              text={!!good ? ADD_TO_CART_BUTTON : NOT_ENOUGH_DATA_BUTTON}
              disabled={!good}
            />
          </div>
        }
      </span>
    );
  }
}