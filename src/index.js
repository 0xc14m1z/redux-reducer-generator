const reducer = (initialState, map = {}) =>
  validate(map) && (
    (state = initialState, action = {}) =>
      map[action.type]
        ? map[action.type](state, action, initialState)
        : state
  )

export default reducer
module.exports = reducer

const validate = map => {
  if ( isObject(map) ) {
    if ( Object.values(map).every(value => isFunction(value)) ) {
      return true
    } else {
      throw new TypeError("The map must contain only methods.")
    }
  } else {
    throw new TypeError("The map must be an object.")
  }
}

const isObject = obj =>
  !!obj &&
  Object.getPrototypeOf(obj) === Object.prototype

const isFunction = f =>
  typeof f === "function"
