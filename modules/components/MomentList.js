import React from 'react'
import Moment from './Moment';
import MomentStore from '../stores/MomentStore';
import MomentService from '../services/MomentService';

export default React.createClass({
    getInitialState: function () {
        return {moments: []};
    },
    componentDidMount: function () {
        MomentStore.addChangeListener(this.onChange);
        MomentService.getList();
    },
    componentWillUnmount: function () {
        MomentStore.removeChangeListener(this.onChange);
    },

    onChange: function () {
        this.setState({moments: MomentStore.getList()});
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