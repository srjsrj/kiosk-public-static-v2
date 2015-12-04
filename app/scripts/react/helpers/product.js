import React from 'react';
import { money, humanizedMoneyWithCurrency } from './money';
import { numberToHumanSize } from './number';
import {
  h1, schemaOrgGoodAvailability, schemaOrgProductArticle, schemaOrgProductCategory,
} from './seo';

export function schemaOrgMarkup(product) {
  return (
    <div style={{display: 'none!important'}}>
      <meta itemProp="name" content={h1(product)} />
      {product.article &&
        <span itemProp="productID" content={schemaOrgProductArticle(product)} />
      }
      {product.goods
        && product.goods.length
        && product.goods.map((el) => schemaOrgGoodPrice(el, product.main_category))
      }
    </div>
  );
}

export function schemaOrgGoodPrice(good, category) {
  return (
    <div
      itemProp="offers"
      itemScope={true}
      itemType="http://schema.org/Offer"
      key={good.global_id}
    >
      <meta itemProp="name" content={good.title} />
      <meta itemProp="sku" content={good.article} />
      <meta itemProp="category" content={schemaOrgProductCategory(category)} />
      <meta itemProp="availability" content={schemaOrgGoodAvailability(good)} />
      {good.actual_price &&
        <div itemProp="price">
          <meta itemProp="priceCurrency" content={good.actual_price.currency_iso_code} />
          <div>{money(good.actual_price)}</div>
        </div>
      }
    </div>
  );
}

export function goodOrderTitle(product, good) {
  let title = good.title;

  if (hasDifferentPrices(product)) {
    title += ` (${humanizedMoneyWithCurrency(good.actual_price)})`;
  }

  if (good.is_run_out) {
    title += ' - нет в наличии';
  }

  return title;
}

export function goodActualPrice({ actual_price }) {
  if (actual_price) {
    return humanizedMoneyWithCurrency(actual_price);
  } else {
    return 'Цена неизвестна';
  }
}

export function attributeValue(attribute) {
  const { products_path, title, value } = attribute

  switch(attribute.type) {
    case 'AttributeLink':
      return (
        <a href={value} target="_blank" className="link link--external">
          {title}
        </a>
      );
    case 'AttributeFile':
      if (!value) return;

      return (
        <a href={value.url} target="_blank" className="link link--file">
          {`${title} ${value.extension} (${numberToHumanSize(value.size)})`}
        </a>
      );
    case 'AttributeDictionary':
      return (
        <span>
          <span className="attribute__title">
            {`${title}: `}
          </span>
          <a href={products_path}>
            {value}
          </a>
        </span>
      );
    default:
      return `${title}: ${value}`;
  }
}

function hasDifferentPrices(product) {
  const diffCents = product.goods.reduce((prev, good) => {
    if (good.actual_price) {
      const actualCents = good.actual_price.cents;

      if (prev.indexOf(actualCents) === -1) {
        return prev.concat([actualCents]);
      }
    }

    return prev;
  }, []);

  return diffCents.length > 1;
}