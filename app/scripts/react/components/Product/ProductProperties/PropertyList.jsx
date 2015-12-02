import React, { PropTypes } from 'react';
import { t } from 'i18next';
import { getOptions } from './utils';
import PropertyListItem from './PropertyListItem';

export default class PropertyList {
  static propTypes = {
    goods: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    properties: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
  }
  render() {
    const { goods, values, properties, onChange } = this.props;

    if (properties.length) {
      const options = getOptions(properties, goods, values);
      const propertyList = properties.map((property) => (
        <PropertyListItem
          key={property.id}
          onChange={onChange.bind(this, property)}
          options={options[property.id] || []}
          property={property}
          value={values[property.id] || null}
        />
      ));

      return <span>{propertyList}</span>;
    } else {
      return (
        <div className={process.env.KIOSK_CSS_PREFIX + 'p-lg ' + process.env.KIOSK_CSS_PREFIX + 'text-center'}>
          <p>{t('vendor.properties.empty')}</p>
        </div>
      );
    }
  }
}
