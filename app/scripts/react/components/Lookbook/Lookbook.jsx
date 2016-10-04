import React, { Component, PropTypes } from 'react';
import ImageSlider from '../common/ImageSlider';

class Lookbook extends Component {
  render() {
    const {
      title,
      images
    } = this.props;

    return (
      <div className='b-page__content__inner b-page__content__inner_content'>
        <section className='b-item-list'>

          <h1 className='b-item-list__title'> {title} </h1>
          
          <ImageSlider slides={images} hasThumbs={images.length > 1} className='b-slider_promo'/>
        
        </section>
      </div>
    );
  }
}

Lookbook.propTypes = {
  title: PropTypes.string.isRequired,
  images: ImageSlider.propTypes.slides,
};

export default Lookbook;
