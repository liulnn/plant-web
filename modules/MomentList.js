import React from 'react'
import Moment from './Moment';

export default React.createClass({
    render() {
        var momentNodes = this.props.data.map(function(moment) {
            return (
                <Moment 
                    moment_id={moment.id} 
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