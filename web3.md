## Web3 Webpack<5

[Webpack 5 Issues](https://web3auth.io/docs/troubleshooting/webpack-issues)  
issues [Web3 don't work with latest of React](https://github.com/ChainSafe/web3.js/issues/4659)
Solution [web3-and-create-react-app](https://github.com/ChainSafe/web3.js#web3-and-create-react-app)

### react-app-rewired 

`yarn add --dev react-app-rewired process crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer`

config-overrides.js

```js
const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
}
```

package.json

```js
  "scripts": {
    "start": "react-app-rewired start",
```

### craco

[Webpack5 Solution](https://forum.moralis.io/t/webpack5-solution/14355)  

craco.config.js

```js
const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
    configure: {
      resolve: {
        fallback: {
          assert: require.resolve('assert'),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          http: require.resolve("stream-http"),
          buffer: require.resolve("buffer"),
          url: require.resolve("url"),
        },
      },
    },
  },
};

```

package.json

```js
  "scripts": {
    "start": "craco start",
```

