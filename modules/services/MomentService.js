import MomentAction from '../actions/MomentAction';

var moments = [
    {
        id: '1',
        author: 'jack',
        avatar: 'http://lorempixel.com/600/337/nature/',
        content: 'Today is a nice day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/330/nature/'
            }
        ],
        address: 'Beijing'
    },
    {
        id: '2',
        author: 'lucy',
        avatar: 'http://lorempixel.com/600/338/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/331/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/332/nature/'
            }
        ],
        address: 'shanghai'
    },
    {
        id: '3',
        author: 'lily',
        avatar: 'http://lorempixel.com/600/339/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/333/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/334/nature/'
            }
        ],
        address: 'zhengzhou'
    }
];

var MomentService = {
    getList: function () {
        MomentAction.getList(moments);
    }
};

module.exports = MomentService;
