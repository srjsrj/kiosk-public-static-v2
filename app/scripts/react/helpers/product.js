import {
  h1,
  schemaOrgGoodAvailability,
  schemaOrgProductArticle,
  schemaOrgProductCategory,
} from './seo';
import HumanizedMoneyWithCurrency from '../components/common/Money/HumanizedMoneyWithCurrency';

export function schemaOrgMarkup(product) {
  return (
    <div style={{display: 'none'}}>
      <meta itemProp="name" content={h1(product)} />
      <meta itemProp="productID" content={schemaOrgProductArticle(product)} />
      {product.goods.map((el) => schemaOrgGoodPrice(el, product.main_category))}
    </div>
  );
}

export function schemaOrgGoodPrice(good, category) {
  return (
    <div
      itemProp="offers"
      itemScope={true}
      itemType="http://schema.org/Offer"
    >
      <meta itemProp="name" content={good.title} />
      <meta itemProp="sku" content={good.article} />
      <meta itemProp="category" content={schemaOrgProductCategory(category)} />
      <meta itemProp="availability" content={schemaOrgGoodAvailability(good)} />
      {good.price &&
        <div itemProp="price">
          <meta itemProp="priceCurrency" content={good.price.currency.iso_code} />
          <div>{goodActualPrice(good)}</div>
        </div>
      }
    </div>
  );
}

export function goodActualPrice({ actual_price }) {
  if (actual_price) {
    return <HumanizedMoneyWithCurrency money={actual_price} />;
  } else {
    return <span>{'Цена неизвестна'}</span>;
  }
}