var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _plants = [
    {
        img: 'http://lorempixel.com/600/337/nature/',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'http://lorempixel.com/600/338/nature/',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://lorempixel.com/600/339/nature/',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://lorempixel.com/600/336/nature/',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'http://lorempixel.com/600/335/nature/',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://lorempixel.com/600/334/nature/',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://lorempixel.com/600/333/nature/',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://lorempixel.com/600/332/nature/',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

var PlantStore = assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _plants;
    },
});

module.exports = PlantStore;