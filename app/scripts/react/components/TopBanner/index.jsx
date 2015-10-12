import React, { findDOMNode, PropTypes } from 'react';
import { DOM_CHANGE } from '../../constants/globalEventKeys';

const STICKY_DETACH = 'sticky_kit:detach';
const STICKY_RECALC = 'sticky_kit:recalc';

export default class TopBanner {
  static propTypes = {
    content: PropTypes.string.isRequired,
    parent: PropTypes.string,
    url: PropTypes.string,
  }
  static defaultProps = {
    parent: '.b-page__content',
  }
  constructor() {
    this.recalcSticky = this.recalcSticky.bind(this);
  }
  componentDidMount() {
    const { parent } = this.props;
    const $topBanner = $(findDOMNode(this.refs.banner));

    $topBanner.stick_in_parent({ parent });
    $(document).on(DOM_CHANGE, this.recalcSticky);
  }
  componentWillUnmount() {
    const $topBanner = $(findDOMNode(this.refs.banner));

    $topBanner.trigger(STICKY_DETACH);
    $(document).off(DOM_CHANGE, this.recalcSticky);
  }
  recalcSticky() {
    $(document.body).trigger(STICKY_RECALC);
  }
  render() {
    const { content, url } = this.props;

    return (
      <div className="top-banner" ref="banner">
        <a className="top-banner__link" href={url}>
          <div className="top-banner__content">
            {content}
          </div>
        </a>
      </div>
    );
  }
}