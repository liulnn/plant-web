import React from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import ImageNature from 'material-ui/svg-icons/image/nature';

import AccountStore from '../stores/AccountStore'
import {withRouter} from 'react-router'

const Login = React.createClass({
    getInitialState: function () {
        return {username: '', names: [], password: ''};
    },

    handleUpdateUsernameInput: function (value) {
        this.setState({
            names: ['jack', 'lily', 'bill'],
            username: value
        });
    },
    handleChange: function (event) {
        this.setState({
            password: event.target.value
        });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        console.log(username, password);
        if (!username || !password) {
            return;
        }
        var success = AccountStore.login(username, password);
        if (success) {
            console.log('login success');
            localStorage.setItem('username', username);
            this.props.router.push('/public')
        } else {
            console.log('login failed');
        }
        this.setState({username: '', names: [], password: ''});
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton><ImageNature /></IconButton>}
                />
                <form onSubmit={this.handleSubmit}>
                    <AutoComplete
                        hintText="Type Username"
                        dataSource={this.state.names}
                        onUpdateInput={this.handleUpdateUsernameInput}
                        floatingLabelText="Username"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="Type Password"
                        floatingLabelText="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        fullWidth={true}
                    />
                    <FlatButton
                        label="Login"
                        primary={true}
                        // linkButton={true}
                        // href="#/"
                        type="submit"
                    />
                </form>
            </div>
        );
    },
})
export default withRouter(Login);
