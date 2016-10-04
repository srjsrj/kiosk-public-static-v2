import React, { Component, PropTypes } from 'react';

class BlogPostListItem extends Component {
  render() {
    const {
      hasLink,
      title,
      text,
      readMore,
      date,
      headerUrl,
      linkTarget,
      image
    } = this.props

    let imagePart = '';
    let titlePart = '';
    
    if(image) {
      if(hasLink) {
        imagePart = ( 
          <a href={headerUrl} title={title} target={linkTarget}>
            <img src={image} alt={title}/>
          </a>
        );
      } else {
        imagePart = (<img src={image} alt={title}/>);
      }
    }

    if(hasLink) {
      titlePart = (
        <a href={headerUrl} title={title} target={linkTarget}>
          <h2 className="post__title">
            {title}
          </h2>
        </a>
      );
    } else {
      titlePart = (
        <h2 className="post__title">
          {title}
        </h2>
      );
    }

    return (
      <article className="post post--short">
        {imagePart}
        <div className="post__content">
          {titlePart}
          <div className="post__text b-text">
            {text}
          </div>
          <div className="post__date">
            {date}
          </div>
          <div className="post__read_more b-text">
            {readMore}
          </div>
        </div>
      </article>
    );
  }
}

BlogPostListItem.propTypes = {
  hasLink: PropTypes.bool.isRequired,
  linkTarget: PropTypes.string.Optional,
  image: PropTypes.string.isOptional,
  headerUrl: PropTypes.string.isOptional,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default BlogPostListItem;

