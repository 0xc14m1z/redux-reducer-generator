import { expect } from "chai"

import reducer from ".."

describe("reducer", () => {

  describe("should throw an error if the map isn't an object", () => {

    it("when it's null", () => {
      const initialState = {}
      const map = null
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

    it("when it's an array", () => {
      const initialState = {}
      const map = []
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

    it("when it's a literal string", () => {
      const initialState = {}
      const map = "string"
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

    it("when it's a literal number", () => {
      const initialState = {}
      const map = 42
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

    it("when it's a Number object", () => {
      const initialState = {}
      const map = new Number(42)
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

    it("when it's a function", () => {
      const initialState = {}
      const map = () => {}
      const test = () => reducer(initialState, map)
      expect(test).to.throw(TypeError)
    })

  })

  describe("private helper methods", () => {

    describe("isObject", () => {

      const isObject = reducer.__get__("isObject")

      it('should return true for POJOs', () => {
        const test = isObject({})
        expect(test).to.be.true
      })

      it('should return true for new empty objects', () => {
        const test = isObject(new Object())
        expect(test).to.be.true
      })

      it('should return false for arrays', () => {
        const test = isObject(new Array())
        expect(test).to.be.false
      })

      it('should return false for functions', () => {
        const test = isObject(() => {})
        expect(test).to.be.false
      })

      it('should return false for literal integers', () => {
        const test = isObject(42)
        expect(test).to.be.false
      })

      it('should return false for Number objects', () => {
        const test = isObject(new Number(42))
        expect(test).to.be.false
      })

      it('should return false for literal strings', () => {
        const test = isObject('42')
        expect(test).to.be.false
      })

      it('should return false for null', () => {
        const test = isObject(null)
        expect(test).to.be.false
      })

      it('should return false for undefined', () => {
        const test = isObject(undefined)
        expect(test).to.be.false
      })

    })

  })

})
