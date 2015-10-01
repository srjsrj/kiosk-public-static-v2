import React, { addons, PropTypes } from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import Userbar from '../../../../app/scripts/react/components/Userbar';
const { renderIntoDocument } = addons.TestUtils;

describe('[Component] Userbar', function() {
  describe('with isDesignOpen = true', function() {
    before('render and locate element', function() {
      this.openDesignSettingsPopup = sinon.spy();
      this.renderedComponent = renderIntoDocument(
        <Userbar
          operatorUrl="http://google.ru/"
          isDesignOpen={true}
          designParamName="open_design"
          openDesignSettingsPopup={this.openDesignSettingsPopup}
        />
      );
    });

    it('renders without errors', function() {
      expect(this.renderedComponent).to.be.an('object');
    });

    it('triggers openDesignSettingsPopup callback', function() {
      sinon.assert.calledOnce(this.openDesignSettingsPopup);
    });
  });

  describe('with isDesignOpen = false', function() {
    before('render and locate element', function() {
      this.openDesignSettingsPopup = sinon.spy();
      this.renderedComponent = renderIntoDocument(
        <Userbar
          operatorUrl="http://google.ru/"
          isDesignOpen={false}
          designParamName="open_design"
          openDesignSettingsPopup={this.openDesignSettingsPopup}
        />
      );
    });

    it('renders without errors', function() {
      expect(this.renderedComponent).to.be.an('object');
    });

    it('doesn\'t triggers openDesignSettingsPopup callback', function() {
      sinon.assert.notCalled(this.openDesignSettingsPopup);
    });
  })
});