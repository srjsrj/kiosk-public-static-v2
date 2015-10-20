import React, { Component, PropTypes } from 'react';
import HiddenInput from './HiddenInput';

export default class CSRFToken extends Component {
  static propTypes = {
    name: PropTypes.string,
    nodeSelector: PropTypes.string,
    token: PropTypes.string,
  }
  static defaultProps = {
    name: 'authenticity_token',
    nodeSelector: '[name="csrf-token"]',
    token: null,
  }
  state = {
    token: this.props.token,
  }
  componentDidMount() {
    // Node doesn't have document object, therefore we will get & render
    // token only after first mount with null value
    this.setState({ token: this.csrfToken() });
  }
  csrfToken() {
    const { nodeSelector } = this.props;
    const tokenNode = document.querySelector(nodeSelector);

    return tokenNode != null ? tokenNode.getAttribute('content') : null;
  }
  render() {
    const { name } = this.props;
    const { token } = this.state;

    if (token) {
      return <HiddenInput name={name} value={token} />;
    }

    return null;
  }
}