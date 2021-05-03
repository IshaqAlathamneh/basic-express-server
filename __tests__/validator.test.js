'use strict';
const validator = require('../src/middleware/validator');
// spy on calling the console log or not

describe('Name Vlidator', ()=> {
let req = {};
let res = {};
let next = jest.fn();

    it('check the invoke', ()=> {
        validator(req, res, next);
        expect(next).toHaveBeenCalled();
    });
    
});