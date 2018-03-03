/* eslint-env mocha */

"use strict";

var assert = require("chai").assert;
var reducer = require("../../src/reducers/current-block");

describe("reducers/current-block", function () {
  var test = function (t) {
    it(t.description, function () {
      t.assertions(reducer(t.state, t.action));
    });
  };
  describe("SET_CURRENT_BLOCK", function () {
    test({
      description: "Set the current block",
      state: null,
      action: {
        type: "SET_CURRENT_BLOCK",
        data: { number: "0x7" },
      },
      assertions: function (state) {
        assert.deepEqual(state, { number: "0x7" });
      },
    });
    test({
      description: "Change the current block",
      state: { number: "0x7" },
      action: {
        type: "SET_CURRENT_BLOCK",
        data: { number: "0x8" },
      },
      assertions: function (state) {
        assert.deepEqual(state, { number: "0x8" });
      },
    });
  });
  describe("CLEAR_CURRENT_BLOCK", function () {
    test({
      description: "Remove the current block",
      state: { number: "0x7" },
      action: {
        type: "CLEAR_CURRENT_BLOCK",
      },
      assertions: function (state) {
        assert.isNull(state);
      },
    });
  });
});
