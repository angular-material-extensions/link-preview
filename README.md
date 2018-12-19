<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/link-preview/master/assets/angular-material-extensions-logo.png">
</p>

# @angular-material-extensions/link-preview - Angular open source UI library to preview web links powered by ngx-linkifyjs and material design

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Flink-preview.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Flink-preview)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/link-preview)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/link-preview/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/link-preview)
[![Build Status](https://travis-ci.org/angular-material-extensions/link-preview.svg?branch=master)](https://travis-ci.org/angular-material-extensions/link-preview)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/link-preview/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/link-preview?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/link-preview/status.svg)](https://david-dm.org/angular-material-extensions/link-preview)
[![devDependency Status](https://david-dm.org/angular-material-extensions/link-preview/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/link-preview#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/link-preview.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/link-preview.svg?style=flat-square)](https://github.com/angular-material-extensions/link-preview/blob/master/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)


<p align="center">
  <img alt="@angular-material-extensions/link-preview demo" width="500px" style="text-align: center;" 
  src="https://cdn.rawgit.com/angular-material-extensions/link-preview/master/assets/demo1.gif">
</p>

multiple link preview

<p align="center">
  <img alt="@angular-material-extensions/link-preview demo with multiple preview" width="70%" style="text-align: center;" 
  src="https://cdn.rawgit.com/angular-material-extensions/link-preview/master/assets/demo.png">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/link-preview/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/link-preview)

View all the directives and components in action at [https://angular-material-extensions.github.io/link-preview](https://angular-material-extensions.github.io/link-preview)

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with V7)

<a name="peerDependencies"/>

## Requirements (peer dependencies):
- [angular animations v7.x](https://www.npmjs.com/package/@angular/animations)
- [angular http v7.x](https://www.npmjs.com/package/@angular/http)
- [angular cdk v7.x](https://www.npmjs.com/package/@angular/cdk)
- [angular material v7.x](https://www.npmjs.com/package/@angular/material)

- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

```bash
npm i @angular/cdk @angular/material @angular/animations @angular/http 
```

or use `angular schematics` like e.g:

```bash
ng add @angular/material 
```

---

<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

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
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatLinkPreviewModule .forRoot()`):
```js
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatLinkPreviewModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatLinkPreviewModule `:

```js
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatLinkPreviewModule, ...], 
})
export class OtherModule {
}
```

## Usage

### Directives

#### `matLinkPreview` used to find and parse links from any text input - should be used in combination with `<mat-link-preview-container>` to render and preview the found links

e.g:

```html
<mat-form-field class="demo-full-width" appearance="outline">
  <mat-label>Enter here your text here with few links to preview ;)</mat-label>
  <textarea matInput matTextareaAutosize matLinkPreview minRows="6"></textarea>
</mat-form-field>
```

### Components

#### `<mat-link-preview-container>` the container that hold the links to preview

| option             | bind     |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| color               | `Input()`  | `string`     |   `primary`  | the color to use for the <a> button of the url - options --> `primary | accent | warn`
| multiple            | `Input()`  | `boolean`    |   `false`   | whether to find, parse and render one single or multiple links
| showLoadingsProgress| `Input()`  | `boolean`    |   `true`    | whether to show and render a loading spinner while fetching the link to preview

e.g:

```html
<mat-link-preview-container color="primary" [multiple]="true"></mat-link-preview-container>
```

#### Full example code

```html
<div class="container" fxFlex.xs="100" fxFlex.sm="70" fxFlex="50">
    <div fxLayout="column" fxLayoutAlign="center">

     <!-- here -->
      <mat-form-field class="demo-full-width" appearance="outline">
        <mat-label>Enter here your text here with few links to preview ;)</mat-label>
        <textarea matInput matTextareaAutosize matLinkPreview minRows="6"></textarea>
        <mat-link-preview-container [multiple]="true"></mat-link-preview-container>
      </mat-form-field>
      <!-- #### -->
      
    </div>
</div>
```

--- 

<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/link-preview/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io/link-preview/doc/index.html) 


<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/link-preview.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/link-preview.git
```

- setup the **@angular-material-extensions/link-preview** package

```bash
$ gulp setup
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies and run the app
```bash
$ npm i && npm start
```

- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/link-preview.git)
2. Install the dependencies by running `npm i`
3. setup the library `gulp setup`
4. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i && npm start`
  
  ---


<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---


<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/link-preview/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

<a name="license"/>

## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

