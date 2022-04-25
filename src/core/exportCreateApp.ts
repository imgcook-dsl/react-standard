import { IPanelDisplay } from './interface';

import { CSS_TYPE, OUTPUT_TYPE, prettierJsOpt, prettierCssOpt, prettierJsonOpt, prettierHtmlOpt } from './consts';


export default function exportCreateApp(schema, option): IPanelDisplay[] {
  const folderName = schema.folderName;
  const {
    dependencies,
    dslConfig,
    _,
    prettier
  } = option;

  let panelValue = '';
  const panelDisplay: IPanelDisplay[] = [];

  panelValue = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  `
  panelDisplay.push({
    panelName: `index.html`,
    panelType: 'html',
    panelValue,
    folder: 'public',
  });

  // index.js
  const isGlobal = schema.css && dslConfig.globalCss && dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS;
  panelValue = `'use strict';
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  ${isGlobal ? " import './global.css';" : ''}
  import './index.css';
  import App from './App';
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  `
  panelDisplay.push({
    panelName: `index.${ dslConfig.useTypescript?'tsx': 'jsx'}`,
    panelType:  dslConfig.useTypescript?'tsx': 'jsx',
    panelValue:  prettier.format(panelValue, prettierJsOpt),
    folder: 'src',
  });

  // index.css
  panelValue = ``
  panelDisplay.push({
    panelName: `index.css`,
    panelType: 'css',
    panelValue:  prettier.format(panelValue, prettierCssOpt),
    folder: 'src',
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
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "main": "index.js",
    "devDependencies": {
      "typescript": "^4.0.5"
    },
    "dependencies": {
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "react-scripts": "5.0.1",
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
    panelValue:  prettier.format(panelValue, prettierJsonOpt),
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
      panelValue:  prettier.format(panelValue, prettierJsonOpt),
      folder: option.folder || '',
    });
  }


  return panelDisplay;
}
