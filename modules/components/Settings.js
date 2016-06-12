import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {Link} from 'react-router';
import {withRouter} from 'react-router'

const Settings = React.createClass({
    logout: function () {
        localStorage.removeItem('username');
        this.props.router.push('/login')
    },
    render: function () {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/"><ActionHome /></IconButton>}
                />
                <List>
                    <Subheader>Priority Interruptions</Subheader>
                    <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
                    <ListItem primaryText="Calls" rightToggle={<Toggle />}/>
                    <ListItem primaryText="Messages" rightToggle={<Toggle />}/>
                </List>
                <Divider />
                <List>
                    <Subheader>Hangout Notifications</Subheader>
                    <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                    <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                    <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
                </List>
                <Divider />
                <List>
                    <ListItem primaryText="About" linkButton containerElement={<Link to="/about" />}/>
                </List>
                <Divider />
                <div>
                    <List>
                        <ListItem primaryText="Logout" linkButton onTouchTap={this.logout}/>
                    </List>
                </div>
            </div>
        )
    }
});

export default withRouter(Settings);
