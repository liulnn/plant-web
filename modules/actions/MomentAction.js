import * as types from '../constants/ActionTypes'
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MomentAction = {
    getList: function (moments) {
        AppDispatcher.dispatch({
            actionType: types.GET_LIST,
            moments: moments
        });
    }
};

module.exports = MomentAction;
