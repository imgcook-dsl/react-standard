function exportCreateApp(schema, option) {
  const folderName = schema.folderName;
  const {
    dependencies,
  } = option;

  let panelValue = '';
  const panelDisplay = [];
  
 panelValue = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
  </head>
  <body>
    <div id="container" style="padding: 24px" />
    <script>var mountNode = document.getElementById('container');</script>
  </body>
</html>`
  panelDisplay.push({
    panelName: `index.html`,
    panelType: 'html',
    panelValue,
    folder: option.folder || '',
  });

  // index.js
  panelValue = `'use strict';
  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import './index.css';
  import App from './${folderName}'
  
  ReactDOM.render(<App />, document.getElementById('container'));
  `
  panelDisplay.push({
    panelName: `index.js`,
    panelType: 'js',
    panelValue,
    folder: option.folder || '',
  });

  // index.css
  panelValue = ``
  panelDisplay.push({
    panelName: `index.css`,
    panelType: 'css',
    panelValue,
    folder: option.folder || '',
  });



  // dependencies
  let packDependencies = dependencies;

  // if (schema.imgcook && schema.imgcook.dependencies) {
  //   schema.imgcook.dependencies.forEach(({packageRax1, versionRax1}) => {
  //     packDependencies[packageRax1] = versionRax1
  //   })
  // }


  // package.json
  const packageJson = {
    "title": "imgcook demo",
    "scripts": {
      "test": "react-scripts test --env=jsdom",
      "start": "react-scripts start",
      "eject": "react-scripts eject",
      "build": "react-scripts build"
    },
    "main": "index.js",
    "devDependencies": {
      "typescript": "^4.0.5"
    },
    "dependencies": {
      "react-scripts": "^4.0.0",
      "react-dom": "^16.14.0",
      "react": "^16.14.0",
      ...packDependencies
    },
    "browserslist": [
      ">0.2%",
      "not dead",
      "not ie <= 11",
      "not op_mini all"
    ]
  }
  panelValue = JSON.stringify(packageJson, null, 4)
  panelDisplay.push({
    panelName: `package.json`,
    panelType: 'json',
    panelValue,
    folder: option.folder || '',
  });



  return panelDisplay;
}

module.exports = exportCreateApp;
