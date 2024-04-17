# Deploy

jacobhsu.github.io/react-did-site

.github/workflows

ci.yml

```js
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false
    - name: Install and Build
      run: |
        npm install
        npm run-script build
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: build
```


package.json

```js
  "homepage": "https://jacobhsu.github.io/react-did-site/",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
```


settings/secrets/actions

Repository secrets

`ACCESS_TOKEN`
