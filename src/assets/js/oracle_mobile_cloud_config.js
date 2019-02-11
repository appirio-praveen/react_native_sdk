import mcs from './mcs';

var mcs_config = {
  "logLevel": mcs.LOG_LEVEL.NONE,
  "logHTTP": true,
  "oAuthTokenEndPoint": "https://ehjz.identity.us.oraclecloud.com/oam/oauth2/tokens",
  "disableAnalyticsLocation": false,
  "mobileBackend": {
    "name": "NAME",
    "baseUrl": "https://jtiodcmcs-ehjz.mobileenv.us2.oraclecloud.com:443",
    "authentication": {
      "type": mcs.AUTHENTICATION_TYPES.basic,
      "basic": {
        "mobileBackendId": "d4c38e2a-b912-4202-bc34-c2289b5b1a22",
        "anonymousKey": "RUhKWl9KVElPRENNQ1NfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDpsel82aXl0Y241Z2pTZg=="
      },
      "oauth": {
        "clientId": "ff635aa2-7132-4885-aa62-9d35fab0c719",
        "clientSecret": "OFwXVOnnemBIIvoUAOp5"
      },
      "facebook":{
        "appId": "YOUR_FACEBOOK_APP_ID",
        "mobileBackendId": "YOUR_BACKEND_ID",
        "anonymousKey": "ANONYMOUS_KEY",
        "scopes": "public_profile,user_friends,email,user_location,user_birthday"
      },
      "token":{
        "mobileBackendId": "d4c38e2a-b912-4202-bc34-c2289b5b1a22",
        "anonymousKey": "RUhKWl9KVElPRENNQ1NfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDpsel82aXl0Y241Z2pTZg==",
        "clientId": "ff635aa2-7132-4885-aa62-9d35fab0c719",
        "clientSecret": "OFwXVOnnemBIIvoUAOp5"
      }
    }
  },
  // "sync": {
  //   "periodicRefreshPolicy": "PERIODIC_REFRESH_POLICY_REFRESH_NONE",
  //   "policies": [
  //     {
  //       "path": '/mobile/custom/firstApi/tasks',
  //       "fetchPolicy": 'FETCH_FROM_SERVICE_ON_CACHE_MISS'
  //     },
  //     {
  //       "path": '/mobile/custom/secondApi/tasks',
  //     }
  //   ]
  // },
  "syncExpress": {
    "handler": "OracleRestHandler",
    "policies": [
      {
        "path": '/mobile/custom/firstApi/tasks/:id(\\d+)?',
      },
      {
        "path": '/mobile/custom/secondApi/tasks/:id(\\d+)?',
      }
    ]
  }
};

export default mcs_config;
