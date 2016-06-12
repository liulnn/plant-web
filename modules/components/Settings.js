import React from 'react';

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
