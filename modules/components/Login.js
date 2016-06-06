import React from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import ImageNature from 'material-ui/svg-icons/image/nature';


export default React.createClass({
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
    handleSubmit: function () {
        console.log(this.state);
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton><ImageNature /></IconButton>}
                />
                <form>
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
                        onTouchTap={this.handleSubmit}
                    />
                </form>
            </div>
        );
    },
})
