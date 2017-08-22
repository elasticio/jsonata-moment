'use strict';

var moment = require('moment');
var jsonata = require('jsonata');

function elasticJsonata(jsonataExpr, options) {
    var expr = jsonata(jsonataExpr, options);
    expr.assign('moment', (arg1, arg2, arg3, arg4) => moment(arg1, arg2, arg3, arg4));
    return expr;
}

module.exports = elasticJsonata;
