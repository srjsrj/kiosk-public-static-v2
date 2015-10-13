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
  if (!category || category.is_root) return;

  return (
    <a href={category.public_url} key={category.id}>
      {category.name}
    </a>
  );
}