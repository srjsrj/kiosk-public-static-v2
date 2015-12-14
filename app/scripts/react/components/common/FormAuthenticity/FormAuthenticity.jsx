import React, { Component, PropTypes } from 'react';
import HiddenInput from '../HiddenInput';
import CSRFToken from '../CSRFToken';

class FormAuthenticity extends Component {
  render() {
    const { field, token } = this.props;

    return (
      <div style={{ display: 'none!important'}}>
        <HiddenInput name="utf8" value="✓" />
        <CSRFToken field={field} token={token} />
      </div>
    );
  }
}

FormAuthenticity.propTypes = {
  token: PropTypes.string,
  field: PropTypes.string,
};
FormAuthenticity.defaultProps = {
  token: null,
  field: 'authenticity_token',
};

export default FormAuthenticity;