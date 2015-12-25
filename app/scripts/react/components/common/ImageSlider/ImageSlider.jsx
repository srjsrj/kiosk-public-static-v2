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
    const $elt = $(findDOMNode(this));
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
  render() {
    const { className, slides } = this.props;

    return (
      <div className={classNames('b-slider', className)}>
        {slides
          .filter((slide) => slide.image)
          .map((slide) =>
            <div className="b-slider__item" key={slide.url}>
              <a href={slide.url} title={slide.title} target="_blank">
                {slide.image
                  ? <RelativeImage image={slide.image} title={slide.title} />
                  : null
                }
              </a>
            </div>
          )
        }
      </div>
    );
  }
}

ImageSlider.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.arrayOf(schemas.slide),
};
ImageSlider.defaultProps = {
  slides: [],
};

export default ImageSlider;