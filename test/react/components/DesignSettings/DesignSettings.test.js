import React, { addons, PropTypes } from 'react';
import Immutable from 'immutable';
import sinon from 'sinon';
import { expect } from 'chai';
import DesignSettings from '../../../../app/scripts/react/components/DesignSettings';
const { renderIntoDocument } = addons.TestUtils;

const current = {
  'feedBgColor': '#000000',
  'productLayoutBigpic': true,
  'logoUrl': 'http://assets.kiiiosk.ru/uploads/vendor/logo/5/logo.svg',
  'pageBgColor': '#6c7a89',
  'fontSize': 'md',
  'productsInRow': 4,
  'fontFamily': 'helvetica',
  'fontColor': '#000000',
  'feedTransparency': 0,
  'pageBgUrl': null
};

describe('[Component] DesignSettings', () => {
  it('should render without errors', () => {  
    const design = Immutable.fromJS({
      current: current,
      currentSaved: current,
      unsavedFields: {},
      isSaving: false,
    });
    const callbacks = {
      changeImage: sinon.spy(),
      changeOption: sinon.spy(),
      saveChanges: sinon.spy(),
      closeDesignSettingsPopup: sinon.spy(),
    };

    const renderedComponent = renderIntoDocument(
      <DesignSettings {...design.toObject()} {...callbacks} />
    );

    expect(renderedComponent).to.be.an('object');
  });
});