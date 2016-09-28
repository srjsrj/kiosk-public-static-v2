import React, { Component, PropTypes } from 'react';

class NotFound extends Component {
  render() {
    const {
      subject,
      content,
    } = this.props;

    return (
      <div className="b-page__content__inner b-page__content__inner_content">
        <div className="b-text b-text_center">
          <div className="lead-icon">
            <i className="icon-tools"></i>
          </div>
          <h3>{ subject }</h3>
          <p>
            { content }
            <br />
            <br />
            <a href='tel:8(800)77-55-661'> 8 (800) 77-55-661 </a>
            <span className="middot">&sdot;</span>
            <a href='mailto:support@kiiiosk.ru'> support@kiiiosk.ru </a>
          </p>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NotFound;