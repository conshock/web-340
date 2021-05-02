/*
============================================
; Title: Exercise 7.3
; Author: Conner Shockley
; Date: 5/1/21
; Description: 
;===========================================
*/

// Require statements.
const fruits = require("../shockley-fruits.js");
const chai = require("chai");

// Assert chai.
const assert = chai.assert;

// Test using Chai.
describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});