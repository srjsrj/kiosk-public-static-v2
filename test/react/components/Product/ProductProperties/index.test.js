import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';
import then from '../../../../utils/then';
import { PHOTO_CHANGE } from '../../../../../app/scripts/react/constants/globalEventKeys';
import ProductProperties from '../../../../../app/scripts/react/components/Product/ProductProperties';

describe('[Component] ProductProperties', () => {
  it('should render without properties', () => {
    const component = renderIntoDocument(
      <ProductProperties />
    );

    expect(component).to.be.an('object');
  });

  it('should trigger "photo change" event when good has been changed', (done) => {
    const nextGood = {
      title: 'Размер: 13',
      article: null,
      global_id: 'Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85ODA3',
      is_ordering: true,
      is_run_out: false,
      is_sale: false,
      is_preorder: false,
      image: {
        title: 'Миникольцо Цепочка золоченая с цирконом б',
        url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5172/image.png',
        uid: '37560f3221732219f3c804d2498a7377d1878df200dc84fb66f0788f16aae1a7',
      },
      attributes: {
        94: '13',
      },
      quantity: 1,
      price: {
        cents: 120000,
        currency_iso_code: 'RUB',
      },
      actual_price: {
        cents: 120000,
        currency_iso_code: 'RUB',
      },
    };
    const component = renderIntoDocument(
      <ProductProperties />
    );
    const changeSpy = spy($.prototype, 'trigger');

    component.setState({ good: nextGood });

    then(() => {
      expect(changeSpy.calledWith(PHOTO_CHANGE, nextGood.image)).to.be.true;
      changeSpy.restore();
      done();
    });
  });
});