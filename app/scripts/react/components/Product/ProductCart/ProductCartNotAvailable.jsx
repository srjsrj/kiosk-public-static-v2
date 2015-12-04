import React, { PropTypes } from 'react';

export default class ProductCartNotAvailable {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { title } = this.props;

    return (
      <div className="b-item-full__form__row b-item-full__form__row_fixed">
        <div className="b-item-full__form__submit">
          <div className="b-btn b-btn_trans">
            {title}
          </div>
        </div>
      </div>
    );
  }
}