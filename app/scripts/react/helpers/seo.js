export function h1(source) {
  return source.h1 || source.name || source.title;
}

export function schemaOrgProductArticle({ article }) {
  return article ? `sku:${article}` : '';
}

export function schemaOrgProductCategory(category) {
  if (!category) return;

  return [
    ...[schemaOrgCategoryName(category.parent)],
    ...[schemaOrgCategoryName(category)],
  ].join(' / ');
}

export function schemaOrgCategoryName(category) {
  if (!category || category.is_root) return;
  return category.name;
}

export function schemaOrgGoodAvailability(good) {
  if (!good.is_ordering && !good.is_run_out) {
    return 'SoldOut';
  } else if (good.is_run_out) {
    return 'OutOfStock';
  } else if (good.is_preorder) {
    return 'PreOrder';
  } else {
    return 'InStock';
  }
}