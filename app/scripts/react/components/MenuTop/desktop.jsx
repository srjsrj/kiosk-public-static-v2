import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import * as schemas from 'r/schemas';

class MenuTopDesktop extends Component {
  isActive(item) {
    const {
      activeItems,
    } = this.props;

    return !!activeItems.filter((activeItem) => (
      activeItem.id === item.id && activeItem.type === item.type
    )).length;
  }
  renderSingle(item) {
    const {
      id,
      title,
      url, 
    } = item;
    const liClasses = classNames({
      'b-nav__item': true,
      'b-nav__item__active': this.isActive(item),
    });

    return (
      <li 
        className={liClasses} 
        id={`menu_item_li_${id}`}
        key={`menu-item-single-${id}`}
      >
        <a
          className="b-nav__link"
          href={url}
        >
          {title}
        </a>
      </li>
    );
  }
  renderChild(child) {
    if (!child) {
      return null;
    }

    const {
      id,
      products_count,
      title,
      url,
    } = child;
    const childClasses = classNames({
      'b-nav__item': true,
      'b-nav__item__active': this.isActive(child),
    });

    return (
      <li
        className={childClasses}
        id={`menu_item_${id}`}
        key={`menu-child-${id}`}
      >
        <a
          className="b-nav__link"
          data-count={products_count}
          href={url}
        >
          {title}
        </a>
      </li>
    );
  }
  renderChildrenSingleColumn(id, children) {
    return (
      <li className="b-nav__list__col" id={`menu_item_li_${id}_children_group`}>
        <ul className="b-nav__list">
          {children.map(this.renderChild.bind(this))}
        </ul>
      </li>
    );
  }
  renderChildrenTwoColumns(id, children) {
    const median = Math.ceil(children.length / 2);
    const groups = [
      children.slice(0, median),
      children.slice(median),
    ];

    return groups.map((g, idx) => (
      <li
        className="b-nav__list__col"
        id={`menu_item_li_${id}_children_group_${idx}`}
        key={`menu-children-group-${idx}`}
      >
        <ul className="b-nav__list">
          {g.map(this.renderChild.bind(this))}
        </ul>
      </li>
    ));
  }
  renderWithChildren(item, idx) {
    const {
      items,
    } = this.props;
    const {
      id,
      children,
      title,
      url,
    } = item;
    const isLast = idx === items.length - 1;
    const liClasses = classNames({
      'b-nav__item': true,
      'b-nav__item_has-sub': true,
      'b-nav__item_has-sub_reverse': isLast,
      'b-nav__item__active': this.isActive(item),
    });

    return (
      <li
        className={liClasses}
        id={`menu_item_li_${id}`}
        key={`menu-item-with-children-${id}`}
      >
        <a className="b-nav__link" href={url}>
          {title}
        </a>
        <ul className="b-nav__list b-nav__list_sub">
          {children.length < 6 ?
            this.renderChildrenSingleColumn(id, children) :
            this.renderChildrenTwoColumns(id, children)
          }
        </ul>
      </li>
    );

  }
  render() {
    const {
        items,
    } = this.props;

    if (!items.length) {
      return null;
    }

    return (
      <div>
        <nav className="b-nav">
          <ul className="b-nav__list">
            {items.map((item, idx) => (
              item.children.length ? 
                this.renderSingle(item, idx) : 
                this.renderWithChildren(item, idx)
            ))}
          </ul>
        </nav>
        <a 
          className="mmenu-open element--active-opacity"
          href="#nav"
          id="navopen"
        >
          <span className="mmenu-open__tick mmenu-open__tick_f" />
          <span className="mmenu-open__tick mmenu-open__tick_s" />
          <span className="mmenu-open__tick mmenu-open__tick_t" />
        </a>
      </div>
    );
  }
}

MenuTopDesktop.propTypes = {
  activeItems: PropTypes.arrayOf(schemas.menuItem).isRequired,
  items: PropTypes.arrayOf(schemas.menuItem).isRequired,
};

MenuTopDesktop.defalutProps = {

};

export default MenuTopDesktop;
