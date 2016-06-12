import React from 'react';
import {withRouter} from 'react-router'

const MyComponent = React.createClass({

    componentDidMount: function () {
        var username = localStorage.getItem('username');
        if (username) {
            this.props.router.push('/public');
        } else {
            this.props.router.push('/login');
        }
    },
    render(){
        return <div></div>
    }
});

export default withRouter(MyComponent);
