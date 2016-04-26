# este + cordova starter kit

## Git Commit Messages

* **Use the present tense ("Add feature" not "Added feature")**
* **Use the imperative mood ("Move cursor to..." not "Moves cursor to...")**
* **Limit the first line to 72 characters or less**
* Reference issues and pull requests liberally

## Prerequisites

Install [node.js](http://nodejs.org).

Then install [gulp.js](http://gulpjs.com/).
```shell
npm install -g gulp
```

Install all project dependencies
```shell
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)

## Dev Tasks

- `gulp` run app in development mode
- `gulp -p` run app in production mode
- `gulp test`


## Translation tasks

- `gulp extractDefaultMessages` extract default translation messages from source hooks

## Cordova
First, make sure you have Cordova installed:

```
npm install -g cordova
```

A cordova folder is already created for you. 
It has a default ` config.xml ` preconfigured with some default plugins and platforms and is also hooked into the webpack build system.

Add the platform(s) you want to build for:

```
cd cordova/
cordova platform add ios # or 'android'
```

To run a packaged app

```
cordova run ios # or 'android' or 'windows'
```
This will also launch the webpack build before packaging.
