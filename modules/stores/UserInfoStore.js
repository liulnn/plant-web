var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _users = [
    {
        uid: 1,
        avatar: "http://lorempixel.com/600/337/nature/",
        username: 'jack',
        phone: '1238294289',
        email: 'sadfasf@126.com',
        place: 'beijing',
    }
];

var UserInfoStore = assign({}, EventEmitter.prototype, {
    getUserById: function (id) {
        return _users[0];
    },
});

module.exports = UserInfoStore;