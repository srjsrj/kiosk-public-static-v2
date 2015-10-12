export function productCategoryPath({ categories }) {
  const notRootCategories = categories.filter((el) => el.is_root === false);
  const category = notRootCategories[0];

  if (!category) return;

  return [
    ...[categoryLink(category.parent)],
    ...[<span key="delimeter"> / </span>],
    ...[categoryLink(category)],
  ];
}

export function categoryLink(category) {
  if (!category || category.id === category.vendor.root_category_id) return;

  return (
    <a href={category.url} key={category.id}>
      {category.name}
    </a>
  );
}

  //   if (!category || category.id === category.vendor.root_category_id) return;

  //   return (
  //     <a href={category.url} key={category.id}>
  //       {category.name}
  //     </a>
  //   );
  // }
  // renderCategoriesPath(categories) {
  //   const notRootCategories = categories.filter((el) => el.is_root === false);
  //   const category = notRootCategories[0];

  //   if (!category) return;
  //   let categoriesLinks = [];
  //   categoriesLinks.push(this.renderCategoryLink(category.parent));
  //   categoriesLinks.push(<span key="delimeter"> / </span>)
  //   categoriesLinks.push(this.renderCategoryLink(category));

  //   return categoriesLinks;




  // def product_category_path(product)
  //   buffer = []

  //   cat = product.first_leveled_category

  //   return unless cat.present?

  //   buffer << category_link(cat.parent)
  //   buffer << category_link(cat)

  //   buffer.compact.join(' / ').html_safe
  // end

  // def category_link(category)
  //   return unless category.present?
  //   return if category.id == category.vendor.root_category_id
  //   link_to category.name, vendor_category_path(category)
  // end