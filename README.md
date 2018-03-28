# redux-reducer-generator

[![Build Status](https://travis-ci.org/0xc14m1z/redux-reducer-generator.svg?branch=master)](https://travis-ci.org/0xc14m1z/redux-reducer-generator) [![Coverage Status](https://coveralls.io/repos/github/0xc14m1z/redux-reducer-generator/badge.svg?branch=master)](https://coveralls.io/github/0xc14m1z/redux-reducer-generator?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/71529a56fad691ed2c10/maintainability)](https://codeclimate.com/github/0xc14m1z/redux-reducer-generator/maintainability)

## how to install

```
$ npm install --save redux-reducer-generator
```

## how to use it

The goal of this package is to shorten and lean the switch statement for
redux reducers, replacing it with a map between action types and methods that
handles those actions.

```js

import reducer from "redux-reducer-generator"
// or var reducer = require("redux-reducer-generator")

const initialState = {
  loading: false,
  errors: false
}

const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"

const showLoader = (state, action) =>
  ({ ...state, loading: true })

const hideLoader = (state, action) =>
  ({ ...state, loading: false })

const map = {
  [SHOW_LOADER]: showLoader,
  [HIDE_LOADER]: hideLoader
}

const loadingReducer = reducer(initialState, map)

```