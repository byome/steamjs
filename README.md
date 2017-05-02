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

### Get 
