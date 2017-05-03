'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

var _constants = require('./constants');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _player = require('./entities/player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Load .env
_dotenv2.default.config();

class Steam {
  constructor(params) {
    const apiKey = process.env.STEAM_API_KEY || params.apiKey;
    if (!apiKey) {
      throw new Error('STEAM_API_KEY must be provided');
      return;
    }
    this.config = { apiKey };
  }

  getPlayerSummaries(steamIds) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!steamIds) {
        throw new Error('#getPlayerSummaries: steamIds parameter missing.');
      }
      const endpoint = _utils2.default.apiEndpoint(_constants.ACTION_PATHS.getPlayerSummaries, _this.config.apiKey, _this._commaSeparatedIds(steamIds));
      try {
        let res = yield (0, _requestPromiseNative2.default)({ uri: endpoint, json: true });
        let players = res.response.players;
        if (players.size > 0) {
          return players.map(function (playerObject) {
            return new _player2.default(playerObject);
          });
        } else {
          throw new Error('No players found wih provided steam id(s)');
        }
        return [];
      } catch (error) {
        console.error(error);
      }
    })();
  }

  /**
   * "Private"
   */
  _commaSeparatedIds(ids) {
    return [].concat(ids).join(',');
  }
}
exports.default = Steam;
//# sourceMappingURL=steam.js.map
