import { Component, PropTypes } from 'react';
import { diff } from 'deep-diff';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import {
  getInitialGood, getInitialValues, getMatchedGood, getUpdatedValues
} from './utils';
import HiddenInput from '../../common/HiddenInput';
import ProductAddToCartButton from '../ProductAddToCartButton';
import PropertyList from './PropertyList';
import PropertySingle from './PropertySingle';

// TODO: i18n
const ADD_TO_CART_BUTTON = 'В корзину';
const NOT_ENOUGH_DATA_BUTTON = 'Выберите характеристику';

export default class ProductProperties extends Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    onGoodChange: PropTypes.func.isRequired,
    properties: PropTypes.array.isRequired,
  }
  static defaultProps = {
    goods: [],
    properties: [],
  }
  constructor(props) {
    super(props);

    const { goods, properties } = props;

    this.state = {
      good: getInitialGood(properties, goods),
      values: getInitialValues(properties, goods),
    };
  }
  componentDidMount() {
    this.props.onGoodChange(this.state.good);
  }
  componentDidUpdate(prevProps, prevState) {
    const { good } = this.state;

    if (diff(this.state.good, prevState.good)) {
      this.props.onGoodChange(this.state.good);
      $(document).trigger(PHOTO_CHANGE, good ? good.image : null);
    }
  }
  updateValues(property, value) {
    const { properties, goods } = this.props;
    const { values } = this.state;

    const newValues = getUpdatedValues(property, properties, goods, values, {
      [property.id]: value,
    });

    this.setState({
      good: getMatchedGood(properties, goods, newValues),
      values: newValues
    });
  }
  render() {
    const { good, values } = this.state;

    const hiddenInput = good && (
      <HiddenInput
        name="cart_item[good_id]"
        value={good.global_id}
      />
    );
    const addToCartButton = (
      <ProductAddToCartButton
        text={!!good ? ADD_TO_CART_BUTTON : NOT_ENOUGH_DATA_BUTTON}
        disabled={!good}
      />
    );

    if (this.props.properties.length > 1) {
      return (
        <span>
          <PropertyList
            goods={this.props.goods}
            onChange={this.updateValues.bind(this)}
            properties={this.props.properties}
            values={values}
          />
          {hiddenInput}
          <div className="b-item-full__form__row b-item-full__form__submit">
            {addToCartButton}
          </div>
        </span>
      );
    } else {
      return (
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__option">
            <PropertySingle
              goods={this.props.goods}
              onChange={this.updateValues.bind(this)}
              properties={this.props.properties}
              values={values}
            />
          </div>
        <div className="b-item-full__form__submit">
          {hiddenInput}
          {addToCartButton}
        </div>
      </div>
      );
    }
  }
}