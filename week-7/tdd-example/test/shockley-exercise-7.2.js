/*
============================================
; Title:  shockley-exercise-7.2.js
; Author: Conner Shockley
; Date:   5/1/21
; Description: Test example.
;===========================================
*/

const assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple, Orange, Mango'.split(',')));
    });
});