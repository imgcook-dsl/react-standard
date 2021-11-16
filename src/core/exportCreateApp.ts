import { IPanelDisplay } from './interface';
const { CSS_TYPE } = require('./consts');

export default function exportCreateApp(schema, option): IPanelDisplay[] {
  const folderName = schema.folderName;
  const {
    dependencies,
    dslConfig,
    _,
  } = option;

  let panelValue = '';
  const panelDisplay: IPanelDisplay[] = [];

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
  const isGlobal = schema.css && dslConfig.globalCss && dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS;
  panelValue = `'use strict';
  import React from 'react'
  import ReactDOM from 'react-dom'
  ${isGlobal ? " import './global.css';" : ''}
  import './index.css';
  import App from './${folderName}'
  
  ReactDOM.render(<App />, document.getElementById('container'));
  `
  panelDisplay.push({
    panelName: `index.${ dslConfig.useTypescript?'tsx': 'jsx'}`,
    panelType:  dslConfig.useTypescript?'tsx': 'jsx',
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


  if (dslConfig.useTypescript) {
    panelValue = `{
      "compilerOptions": {
        "target": "es5",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }
     `
    panelDisplay.push({
      panelName: `tsconfig.json`,
      panelType: 'json',
      panelValue,
      folder: option.folder || '',
    });
  }


  return panelDisplay;
}
