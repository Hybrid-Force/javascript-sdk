/**
 * Created by derek on 9/8/15.
 */
'use strict';

if (global.localStorage) {
    module.exports = global.localStorage;
} else {
    try {
        module.exports = require('AsyncStorage');
        module.exports.async = true;
    } catch (e) {
        module.exports = require('localstorage');
    }
}