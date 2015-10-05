import React, { Component, findDOMNode, PropTypes } from 'react';

// const defaultProps = {
//   images: [{
//     id: 1,
//     title: 'Кольцо 1',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg',
//   }, {
//     id: 2,
//     title: 'Кольцо 2',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg',
//   }, {
//     id: 3,
//     title: 'Кольцо 1',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg',
//   }, {
//     id: 4,
//     title: 'Кольцо 2',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg',
//   }, {
//     id: 5,
//     title: 'Кольцо 1',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg',
//   }, {
//     id: 6,
//     title: 'Кольцо 2',
//     url: 'http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg',
//   }],
// }

export default class ProductGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
  }
  state = {
    selectedIndex: 0,
  }
  static defaultProps = {
    images: [],
  }
  componentDidMount() {
    this.initSliders();

    $(document).on('productPhotoChange', this.onPhotoChange.bind(this));
    $(document).on('updateProductImages', this.reinitSliders.bind(this));
  }
  componentDidUpdate(prevProps, prevState) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    if (prevState.selectedIndex !== this.state.selectedIndex) {
      $productThumbs.trigger('owl.goTo', this.state.selectedIndex);
      $productPhoto.trigger('owl.goTo', this.state.selectedIndex);
    }
  }
  initSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.owlCarousel({
      singleItem: true,
      afterAction: this.onAfterPhotoAction.bind(this),
    });

    $productThumbs.owlCarousel({
      items: 4,
      pagination: false,
    });
  }
  reinitSliders() {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const $productThumbs = $(findDOMNode(this.refs.productThumbs));

    $productPhoto.data('owlCarousel').reinit({
      singleItem: true,
      afterAction: this.onAfterPhotoAction.bind(this),
    });

    $productThumbs.data('owlCarousel').reinit({
      items: 4,
      pagination: false,
    });
  }
  getIndexByUrl(images, url) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      if (image.url === url) {
        return i;
      }
    };

    return -1;
  }
  onAfterPhotoAction(el) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));
    const carouselData = $productPhoto.data('owlCarousel');

    if (carouselData) {
      this.setState({
        selectedIndex: carouselData.currentItem,
      });
    }
  }
  onPhotoChange(ev, url) {
    if (url) {
      const selectedIndex = this.getIndexByUrl(this.props.images, url);

      if (selectedIndex > -1) {
        this.setState({ selectedIndex });
      }
    }
  }
  onThumbClick(idx, ev) {
    const $productPhoto = $(findDOMNode(this.refs.productPhoto));

    ev.preventDefault();
    $productPhoto.trigger('owl.goTo', idx);
  }
  render() {
    return (
      <div>
        <div className="b-slider" ref="productPhoto">
          {
            this.props.images.map((el) => (
              <a
                className="b-slider__item"
                data-lightbox={true}
                href={el.url}
                key={el.id}
              >
                <img className="u-photo" src={el.url} title={el.title} />
              </a>
            ))
          }
        </div>
        <div className="b-slider b-slider_thumbs" ref="productThumbs">
          {
            this.props.images.map((el, idx) => (
              <a
                className="b-slider__item"
                href={el.url}
                key={el.id}
                onClick={this.onThumbClick.bind(this, idx)}
              >
                <img className="u-photo" src={el.url} title={el.title} />
              </a>
            ))
          }
        </div>
      </div>
    );
  }
}