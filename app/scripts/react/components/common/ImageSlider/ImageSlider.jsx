import React, { findDOMNode, Component, PropTypes } from 'react';
import classNames from 'classnames';
import * as schemas from '../../../schemas';
import ImageSliderSlides from './ImageSliderSlides';
import ImageSliderThumbs from './ImageSliderThumbs';

const SLIDER_OPTIONS = {
  autoPlay: 5000,
  navigation: true,
  pagination: false,
};

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.initSlider = this.initSlider.bind(this);
    this.changeSelectedSlide = this.changeSelectedSlide.bind(this);
  }
  componentDidMount() {
    //FIXME: Если делать без setTimeout, то первый показ слайда пропускается
    setTimeout(this.initSlider, 0);
  }
  initSlider() {
    const { className } = this.props;
    const $elt = $(findDOMNode(this.refs.slides));
    let options = SLIDER_OPTIONS;

    if (className) {
      if (className.match(/b-slider_promo/g)) {
        options = {
          ...options,
          afterInit() {
            $elt.addClass('loaded');
          },
          autoHeight: true,
          lazyLoad: true,
          singleItem: true,
          transitionStyle: 'fade',
        };
      }
      if (className.match(/application-slider_photos/g)) {
        options = {
          ...options,
          items: 3,
          itemsDesktop: 3,
          singleItem: false,
        };
      }
      if (className.match(/application-slider_instagram/g)) {
        options = {
          ...options,
          items: 6,
          itemsDesktop: 6,
          lazyLoad: true,
          singleItem: false,
        };
      }
    }

    $elt.owlCarousel(options);
  }
  changeSelectedSlide(idx) {
    const $elt = $(findDOMNode(this.refs.slides));
    $elt.trigger('owl.goTo', idx);
  }
  render() {
    const { className, hasThumbs, slides, thumbHeight, thumbWidth } = this.props;
    const sliderClasses = classNames('b-slider', className);
    const filtered = slides.filter(slide => slide.image);

    return (
      <span>
        <div className={sliderClasses}>
          <ImageSliderSlides items={filtered} ref="slides" />
        </div>
        {hasThumbs &&
          <ImageSliderThumbs
            items={filtered}
            onThumbClick={this.changeSelectedSlide}
            thumbHeight={thumbHeight}
            thumbWidth={thumbWidth}
          />
        }
      </span>
    );
  }
}

ImageSlider.propTypes = {
  className: PropTypes.string,
  hasThumbs: PropTypes.bool,
  slides: PropTypes.arrayOf(schemas.slide),
  thumbHeight: PropTypes.number,
  thumbWidth: PropTypes.number,
};
ImageSlider.defaultProps = {
  hasThumbs: true,
  slides: [],
  thumbWidth: 200,
  thumbHeight: 100,
};

export default ImageSlider;