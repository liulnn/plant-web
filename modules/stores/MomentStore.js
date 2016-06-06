var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

import * as types from '../constants/ActionTypes'

var moments = [];

const CHANGE_EVENT = 'change';

var MomentStore = assign({}, EventEmitter.prototype, {
    getList: function () {
        return moments;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case types.GET_LIST:
            moments = action.moments;
            MomentStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = MomentStore;