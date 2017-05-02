'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Utils {
  static apiEndpoint(path, apiKey, steamIds) {
    let steamIdKey = 'steamid';
    if (steamIds.split(',').length > 0) {
      steamIdKey = 'steamids';
    }
    return `${path}/?key=${apiKey}&${steamIdKey}=${steamIds}`;
  }
}
exports.default = Utils;
//# sourceMappingURL=utils.js.map
