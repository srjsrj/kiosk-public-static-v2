import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ProductBreadcrumbs {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
  }
  renderCategoryLink(category) {
    if (!category || category.id === category.vendor.root_category_id) return;

    return (
      <a href={category.url} key={category.id}>
        {category.name}
      </a>
    );
  }
  renderCategoriesPath(categories) {
    const notRootCategories = categories.filter((el) => el.is_root === false);
    const category = notRootCategories[0];

    if (!category) return;
    let categoriesLinks = [];
    categoriesLinks.push(this.renderCategoryLink(category.parent));
    categoriesLinks.push(<span key="delimeter"> / </span>)
    categoriesLinks.push(this.renderCategoryLink(category));

    return categoriesLinks;
  }
  render() {
    const { className, product } = this.props;

    return (
      <div className={classNames('b-breadcrumbs', className)}>
        {this.renderCategoriesPath(product.categories)}
      </div>
    );
  }
}

