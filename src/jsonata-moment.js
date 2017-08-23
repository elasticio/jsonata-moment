'use strict';

const moment = require('moment');
const jsonata = require('jsonata');

function jsonataMoment(jsonataExpr, options) {
    const expr = jsonata(jsonataExpr, options);
    expr.assign('moment', (arg1, arg2, arg3, arg4) => moment(arg1, arg2, arg3, arg4));
    return expr;
}

module.exports = jsonataMoment;
