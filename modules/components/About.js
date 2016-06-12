import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export default React.createClass({
    render() {
        return <div>
            <AppBar
                title="Plant"
                iconElementLeft={<IconButton linkButton={true} href="#/"><ActionHome /></IconButton>}
            />
            About
        </div>
    }
})