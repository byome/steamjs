# Steam.JS #
Javascript access to the Steam Community API

## Initialize ##
This module uses ```dotenv```, so you can set the ENV variable STEAM_API_KEY.
If you do not use a .env file, you can set the apiKey manually:

#### With ```dotenv``` ####
```javascript
import Steam from 'steam.js';
const steamClient = new Steam();
```

#### Default ####
```javascript
import Steam from 'steam.js';
const steamClient = new Steam({ apiKey: '1234ASDF' });
```


## API ##

### getPlayerSummaries(steamIds) ###
**Returns Promise**

_Note: the [Player API](https://github.com/byome/steam.js/wiki/Player) is documented in the wiki._

**Usage**
```javascript
let players = await getPlayerSummaries('1234,5678');
players.forEach((player) => console.log(player.name()));
```
or
```javascript
getPlayerSummaries('1234').then((players) => {
  players.forEach((player) => console.log(player.name()));
});
```
