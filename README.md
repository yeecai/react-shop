

## This is a home-maded react.js shop deployed with Git pages,

### component by component.

### [demo](https://yeecai.github.io/react-shop/)

### dependecies:

material ui: (forget the command...)

react-router-dom: ```npm install ...```

@material-ui/icons: ```npm install @material-ui/icons```

styled-components: ```npm install --save styled-components```

### deployment:

1. Create an empty git remote repository

2. create-react-app react-shop

3. cd react-shop &  npm install gh-pages --save-dev

4. add {"homepage": "https://liliancai.github.io/react-shop",scripts. { "predeploy": "npm run build"},
    "deploy": "gh-pages -d build"}} in package.json

5. git init & git remote add origin https://github.com/liliancai/react-shop.git

6. npm run deploy

7. check https://liliancai.github.io/react-shop, if 404 wait 5 minutes.

PS: try rm -rf node_modules/gh-pages/.cache if error prompted
