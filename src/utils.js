export default class Utils {
  static apiEndpoint(path, apiKey, steamIds) {
    let steamIdKey = 'steamid';
    if (steamIds.split(',').length > 0) { steamIdKey = 'steamids'; }
    return `${path}/?key=${apiKey}&${steamIdKey}=${steamIds}`;
  }
}
