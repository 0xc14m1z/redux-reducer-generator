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
  if ( !isObject(map) )
    throw new TypeError("The map must be an object.")

  if ( !Object.values(map).every(value => isFunction(value)) )
    throw new TypeError("The map must contain only methods.")
  
  return true
}

const isObject = obj =>
  !!obj &&
  Object.getPrototypeOf(obj) === Object.prototype

const isFunction = f =>
  typeof f === "function"

const isString = s =>
  !!s && typeof s === "string"
