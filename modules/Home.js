import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import Tabs from './Tabs';
import MomentList from './MomentList';


const moments = [
    {
        id: '1',
        author: 'jack',
        avatar: 'http://lorempixel.com/600/337/nature/',
        content: 'Today is a nice day!', 
        images: [
            {
                'source': 'http://lorempixel.com/600/330/nature/'
            }
        ],
        address: 'Beijing'
    },
    {
        id: '2',
        author: 'lucy',
        avatar: 'http://lorempixel.com/600/338/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/331/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/332/nature/'
            }
        ],
        address: 'shanghai'
    },
    {
        id: '3',
        author: 'lily',
        avatar: 'http://lorempixel.com/600/339/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/333/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/334/nature/'
            }
        ],
        address: 'zhengzhou'
    }
];

export default React.createClass({
    getInitialState: function() {
        return {moments: moments};
    },
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
                <MomentList data={this.state.moments} />
                <Tabs index={1}/>
            </div>
        )
    }
})