const fetch = require('node-fetch');
// const axios = require('axios');
global.fetch = fetch;

// const Unsplash = require('unsplash-js').default;
// const unsplash = new Unsplash({ accessKey:`${process.env.UNSPLASH_ACCESS_KEY}`});

// module.exports = unsplash;

const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});

module.exports = unsplash;
