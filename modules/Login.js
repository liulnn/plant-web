import React from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    getInitialState: function () {
        return {dataSource: []};
    },

    handleUpdateInput: function (value) {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    },
    onMouseDown: function (event) {
        console.log('clicked login button');
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Family"
                />
                <AutoComplete
                    hintText="Type Username"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    floatingLabelText="Username"
                    fullWidth={true}
                />
                <AutoComplete
                    hintText="Type Password"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    floatingLabelText="Password"
                    fullWidth={true}
                />
                <FlatButton
                    label="Login"
                    primary={true}
                    linkButton={true}
                    href="#/profile"
                    onMouseDown={this.onMouseDown}
                />
            </div>
        );
    },
})
