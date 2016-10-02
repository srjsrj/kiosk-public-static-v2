import React, { Component, PropTypes } from 'react';
import Pagination from '../Pagination'

class BlogPostList extends Component {
  constructor(props) {
    super(props);

    this.renderBlogPost = this.renderBlogPost.bind(this);
  }

  render() {
    const {
      blogPosts,
    } = this.props;

    return (
      <div className="b-page__content__inner b-page__content__inner_content">
        <section className="posts">
          { blogPosts.posts.map( blog_post => this.renderBlogPost(blog_post) ) }

          <Pagination totalPages={blogPosts.totalPages} currentPage={blogPosts.currentPage}>
        </section>
      </div>
    );
  }

  renderBlogPost(blog_post) {
    let image = '';
    let title = '';
    
    if(blog_post.image) {
      if(blog_post.has_link) {
        image = ( 
          <a href={ blog_post.header_url } title={ blog_post.title } target={ blog_post.link_target }>
            <img src={ blog_post.image } alt={ blog_post.title }/>
          </a>
        );
      } else {
        image = (<img src={ blog_post.image } alt={ blog_post.title }/>);
      }
    }

    if(blog_post.has_link) {
      title = (
        <a href={ blog_post.header_url } title={ blog_post.title } target={ blog_post.link_target }>
          <h2 className="post__title">
            { blog_post.title }
          </h2>
        </a>
      );
    } else {
      title = (
        <h2 className="post__title">
          { blog_post.title }
        </h2>
      );
    }

    return (
      <article className="post post--short">
        { image }
        <div className="post__content">
          { title }
          <div className="post__text b-text">
            { blog_post.short_text }
          </div>
          <div className="post__date">
            { blog_post.published_at }
          </div>
          <div className="post__read_more b-text">
            { blog_post.read_more }
          </div>
        </div>
      </article>
    );
  }
}

BlogPostList.propTypes = {
  blogPosts: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape(
        hasLink: PropTypes.boolean.isRequired,
        linkTarget: PropTypes.string.Optional,
        image: PropTypes.string.isOptional,
        headerUrl: PropTypes.string.isOptional,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        read_more: PropTypes.string.isRequired,
        date: PropTypes.string.String,
      )
    ),
  })
};

export default BlogPostList;
