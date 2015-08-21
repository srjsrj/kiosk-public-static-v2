import React, { addons, PropTypes } from 'react';
import Immutable from 'immutable';
import sinon from 'sinon';
import { expect } from 'chai';
import DesignSettings from '../../../../app/scripts/react/components/DesignSettings';
const { renderIntoDocument } = addons.TestUtils;

describe('[Component] DesignSettings', function() {
  before('render and locate element', function() {
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
    const props = Immutable.fromJS({
      current: current,
      currentSaved: current,
      unsavedFields: {},
      isSaving: false
    });

    this.renderedComponent = renderIntoDocument(
      <DesignSettings
        {...props.toObject()}
        changeImage={sinon.spy()}
        changeOption={sinon.spy()}
        saveChanges={sinon.spy()}
        closeDesignSettingsPopup={sinon.spy()}
      />
    );
  });

  it('renders without errors', function() {
    expect(this.renderedComponent).to.be.an('object');
  });
});