## Web3 Webpack<5

issues [Web3 don't work with latest of React](https://github.com/ChainSafe/web3.js/issues/4659)
Solution [web3-and-create-react-app](https://github.com/ChainSafe/web3.js#web3-and-create-react-app)

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
