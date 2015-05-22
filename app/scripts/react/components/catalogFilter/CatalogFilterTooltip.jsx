import Timer from '../../entities/Timer';
import CatalogFilterActionCreators from '../../actions/CatalogFilter';

const CLOSE_TIMEOUT = 3000;
const TOOLTIP_LOADING_STATE = 'loading',
      TOOLTIP_LOADED_STATE = 'loaded',
      TOOLTIP_ERROR_STATE = 'error';

let CatalogFilterTooltip = React.createClass({
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    linkTitle: React.PropTypes.string,
    closeTimeout: React.PropTypes.number,
    position: React.PropTypes.shape({
      top: React.PropTypes.number.isRequired,
      left: React.PropTypes.number.isRequired
    }).isRequired,
    onClose: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      linkTitle: 'Показать',
      closeTimeout: CLOSE_TIMEOUT,
      position: {top: 0, left: 0}
    };
  },

  getInitialState() {
    return {
      currentState: TOOLTIP_LOADING_STATE,
      filteredCount: null
    };
  },

  componentDidMount() {
    this.timer = new Timer(this.props.onClose, this.props.closeTimeout);

    CatalogFilterActionCreators.getFilteredCount(this.props.filter)
      .then((count) => {
        if (this.isMounted()) {
          this.setState({
            currentState: TOOLTIP_LOADED_STATE,
            filteredCount: count
          });
        }
        this.timer.resume();
      })
      .fail((xhr) => {
        let message;
        if (xhr.responseJSON != null) {
          let { responseJSON: json } = xhr;
          message = json.message || json.long_message || json.error;
        } else {
          message = `Ошибка сети: ${xhr.statusText}`;
        }
        alert(message);
        if (this.isMounted()) this.setState({currentState: TOOLTIP_ERROR_STATE});
      });

    document.addEventListener('scroll', this.props.onClose, false);
  },

  componentWillUnmount() {
    this.timer.stop();
    document.removeEventListener('scroll', this.props.onClose, false);
  },

  render() {
    let tooltipStyles = {
      top: this.props.position.top,
      left: this.props.position.left
    };

    return (
      <div className="b-tooltip" style={tooltipStyles}>
        {this.renderContent()}
      </div>
    );
  },

  renderContent() {
    switch(this.state.currentState) {
      case TOOLTIP_LOADING_STATE: return 'Загрузка';
      case TOOLTIP_ERROR_STATE: return 'Ошибка загрузки:(';
      case TOOLTIP_LOADED_STATE:
        return (
          <span onMouseEnter={this.timer.stop} onMouseLeave={this.timer.resume}>
            Выбрано вариантов: {this.state.filteredCount} <a href={`?${this.props.filter}`}>{this.props.linkTitle}</a>
          </span>
        );
      default: return null;
    }
  }
});

export default CatalogFilterTooltip;