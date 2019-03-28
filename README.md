

This is a react.js shop deployed with Git pages

dependecies:

material ui: npm install material ui

react-router-dom: npm install ...

npm install @material-ui/icons

npm install --save styled-components

deployment:

1. Create an empty git remote repository

2. create-react-app react-shop

3. cd react-shop &  npm install gh-pages --save-dev

4. add {"homepage": "https://liliancai.github.io/react-shop",scripts. { "predeploy": "npm run build"},
    "deploy": "gh-pages -d build"}} in package.json

5. git init & git remote add origin https://github.com/liliancai/react-shop.git

6. npm run deploy

7. check https://liliancai.github.io/react-shop, if 404 wait 5 minutes.

PS: rm -rf node_modules/gh-pages/.cache