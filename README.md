<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/link-preview/master/demo/src/assets/logo.svg">
</p>

# link-preview - Angular open source UI library to preview web links

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Flink-preview.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Flink-preview)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/link-preview/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/link-preview)
[![Build Status](https://travis-ci.org/angular-material-extensions/link-preview.svg?branch=master)](https://travis-ci.org/angular-material-extensions/link-preview)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/link-preview/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/link-preview?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/link-preview/status.svg)](https://david-dm.org/angular-material-extensions/link-preview)
[![devDependency Status](https://david-dm.org/angular-material-extensions/link-preview/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/link-preview#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/link-preview.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/link-preview.svg?style=flat-square)](https://github.com/angular-material-extensions/link-preview/blob/master/LICENSE)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/link-preview

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/link-preview` via:
```shell
npm install --save @angular-material-extensions/link-preview
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/link-preview`:
```js
map: {
  '@angular-material-extensions/link-preview': 'node_modules/@angular-material-extensions/link-preview/bundles/link-preview.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@angular-material-extensions/link-preview';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@angular-material-extensions/link-preview';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@angular-material-extensions/link-preview';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

