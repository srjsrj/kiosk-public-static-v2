import React, { PropTypes } from 'react';
import classNames from 'classnames';

function FaIcon({ name }) {
  const extraClasses = name.split(' ').map((c) => `fa-${c}`);

  return <i className={classNames('fa', extraClasses)} />;
}

FaIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FaIcon;
