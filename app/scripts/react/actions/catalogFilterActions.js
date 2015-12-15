import { t } from 'i18next';
import Api from '../api/api';
import NoticeService from '../services/Notice';

export function showFilteredCount(filter) {
  NoticeService.notifyInfo('Загрузка...');

  Api.catalogFilter.getFilteredCount(filter)
    .then((count) => {
      NoticeService.notifyInfo(
        <span>
          {t('vendor.notice.catalog_filter.selected_products')}:
          {` ${count} `}
          <a href={`?${filter}`}>
            {t('vendor.notice.catalog_filter.show_products')}
          </a>
        </span>
      )
    })
    .fail(NoticeService.errorResponse);
}