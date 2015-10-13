export function productCategoryPath({ categories }) {
  const notRootCategories = categories.filter((el) => el.is_root === false);
  const category = notRootCategories[0];

  if (!category) return;

  let path = [];

  if (category.parent && !category.parent.is_root) {
    path.push(categoryLink(category.parent));
    path.push(<span key="delimeter"> / </span>);
  }

  path.push(categoryLink(category));

  return path;
}

export function categoryLink(category) {
  if (!category || category.is_root) return;

  return (
    <a href={category.public_url} key={category.id}>
      {category.name}
    </a>
  );
}