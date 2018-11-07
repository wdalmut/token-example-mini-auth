# Token Authentication layer for @wdalmut/mini-auth

A simple authentication layer for `token auth`

```
npm install --save @wdalmut/mini-auth
npm install --save @wdalmut/token-auth
npm install --save token-example-mini-auth
```

## Usage

```js
let auth = require('@wdalmut/mini-auth');
let token = require('@wdalmut/token-auth');
let mock = require('token-example-mini-auth');

auth(token(mock) // middleware
