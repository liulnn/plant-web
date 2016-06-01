import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import Tabs from './Tabs';
import UserInfo from './UserInfo';

export default React.createClass({
    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/home"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton linkButton={true} href="#/settings"><ActionSettings /></IconButton>}
                />
                <UserInfo />
                <Tabs index={2}/>
            </div>
        )
    }
})