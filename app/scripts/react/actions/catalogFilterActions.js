import Api from '../api/api';
import NoticeService from '../services/Notice';

export function showFilteredCount(filter) {
  NoticeService.notifyInfo('Загрузка...');

  Api.catalogFilter.getFilteredCount(filter)
    .then((count) => {
      NoticeService.notifyInfo(
        <span>
          Выбрано вариантов: {count} <a href={`?${filter}`}>Показать</a>
        </span>
      )
    })
    .fail(NoticeService.errorResponse);
}