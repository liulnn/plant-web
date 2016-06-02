import React from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import ImageNature from 'material-ui/svg-icons/image/nature';


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
                    title="Plant"
                    iconElementLeft={<IconButton><ImageNature /></IconButton>}
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
                    href="#/"
                    onMouseDown={this.onMouseDown}
                />
            </div>
        );
    },
})
