import dotenv from 'dotenv';
import rp from 'request-promise-native';

import { ACTION_PATHS } from './constants';
import Utils from './utils';

import Player from './entities/player';


// Load .env
dotenv.config();


export default class Steam {
  constructor(params) {
    const apiKey = process.env.STEAM_API_KEY || params.apiKey;
    if (!apiKey) {
      throw new Error('STEAM_API_KEY must be provided');
      return;
    }
    this.config = { apiKey };
  }

  async getPlayerSummaries(steamIds) {
    if (!steamIds) { throw new Error('#getPlayerSummaries: steamIds parameter missing.'); }
    const endpoint = Utils.apiEndpoint(
      ACTION_PATHS.getPlayerSummaries,
      this.config.apiKey,
      this._commaSeparatedIds(steamIds)
    );
    try {
      let res = await rp({ uri: endpoint, json: true });
      let players = res.response.players;
      if (players.size > 0) {
        return players.map(playerObject => new Player(playerObject));
      } else {
        throw new Error('No players found wih provided steam id(s)');
      }
      return [];
    } catch(error) {
      console.error(error);
    }
  }


  /**
   * "Private"
   */
  _commaSeparatedIds(ids) {
    return [].concat(ids).join(',');
  }
}
