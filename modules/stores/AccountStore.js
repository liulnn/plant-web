var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Immutable = require('immutable');

var accounts = Immutable.Map({'jack': '1234', 'bill': '123455'});

var AccountStore = assign({}, EventEmitter.prototype, {
    login: function (username, password) {
        if(accounts.get(username) == password){
           return true; 
        }
        return false;
    },
});

module.exports = AccountStore;