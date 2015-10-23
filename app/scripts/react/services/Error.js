const SEVERITY_INFO_TYPE = 'info';
const SEVERITY_ERROR_TYPE = 'error';
const SEVERITY_WARNING_TYPE = 'warning';

export default {
  remoteService: global.Bugsnag || null,

  notify(name, message, metaData, severity) {
    if (this.remoteService != null && this.remoteService.notify) {
      this.remoteService.notify(name, message, metaData, severity);
    }
    // else {
    //   console.group(`[${severity}] ${name}`);
    //   if (metaData != null && Object.keys(metaData).length) {
    //     console.log('Meta:', metaData);
    //   }
    //   console.groupEnd();
    // }
  },

  notifyError(name, metaData = {}) {
    this.notify(name, '', metaData, 'error');
  },

  notifyWarning(name, metaData = {}) {
    this.notify(name, '', metaData, 'warning');
  },

  notifyException(e, name) {
    if (this.remoteService != null && this.remoteService.notifyException) {
      this.remoteService.notifyException(e, name);
    }
  },

  notifyErrorProps(name, metaData = {}) {
    this.notifyError('[Props] ' + name, metaData);
  },

  notifyErrorResponse(name, metaData = {}) {
    if (metaData.response) {
      this.notifyError('[AJAX] ' + name, metaData);
    }
  },
};