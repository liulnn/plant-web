import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import Tabs from './Tabs';
import Moment from './Moment';


export default React.createClass({
    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/home"><ActionHome /></IconButton>}
                    iconElementRight={
                      <IconMenu
                        iconButtonElement={
                          <IconButton><ContentAdd /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      >
                        <MenuItem primaryText="Join in" />
                        <MenuItem primaryText="Create" />
                      </IconMenu>
                    }
                />
                <Moment />
                <Tabs index={1}/>
            </div>
        )
    }
})