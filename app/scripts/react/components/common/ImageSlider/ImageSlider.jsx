import React, { findDOMNode, Component, PropTypes } from 'react';
import classNames from 'classnames';
import * as schemas from '../../../schemas';
import RelativeImage from '../Image/RelativeImage';

const SLIDER_OPTIONS = {
  autoPlay: 5000,
  navigation: true,
  pagination: false,
};

class ImageSlider extends Component {
  componentDidMount() {
    //FIXME: Если делать без setTimeout, то первый показ слайда пропускается
    setTimeout(() => {
      this.initSlider()
    }, 0);
  }
  initSlider() {
    const { className } = this.props;
    const $elt = $(findDOMNode(this.refs.slider));
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
  renderSlide(slide, idx) {
    const image = <RelativeImage image={slide.image} title={slide.title} />

    return (
      <div className="b-slider__item" key={idx}>
        {slide.url
          ? <a href={slide.url} title={slide.title} target="_blank">
              {image}
            </a>
          : image
        }
      </div>
    );
  }
  render() {
    const { className, slides } = this.props;
    const filtered = slides.filter(slide => slide.image);

    return (
      <span>
        <div
          className={classNames('b-slider', className)}
          ref="slider"
        >
          {filtered.map(this.renderSlide)}
        </div>
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
  hasThumbs: false,
  slides: [],
};

export default ImageSlider;