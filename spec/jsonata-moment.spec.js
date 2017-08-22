const jsonataMoment = require('..');
const moment = require('moment');
const { expect } = require('chai');

describe('jsonata-moment', () => {
    it('$moment function', () => {
        const FORMAT = 'DD/MM/YYYY HH:mm:ss';
        const result = jsonataMoment(`$moment().format("${FORMAT}")`).evaluate();
        expect(result).to.equal(moment().format(FORMAT));
    });
});
