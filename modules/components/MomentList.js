import React from 'react'
import Moment from './Moment';
import MomentStore from '../stores/MomentStore';

export default React.createClass({
    getInitialState: function () {
        return {moments: MomentStore.getAll()};
    },
    render() {
        var momentNodes = this.state.moments.map(function (moment) {
            return (
                <Moment
                    key={moment.id}
                    author={moment.author}
                    avatar={moment.avatar}
                    content={moment.content}
                    images={moment.images}
                    address={moment.address}
                />
            );
        });
        return (
            <div>
                {momentNodes}
            </div>
        );
    }
})