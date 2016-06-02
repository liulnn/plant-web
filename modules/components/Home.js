import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import Tabs from './Tabs';
import MomentList from './MomentList';


export default React.createClass({
    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/home"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton linkButton={true} href="#/moments/add"><ContentAdd /></IconButton>}
                />
                <MomentList />
                <Tabs index={1}/>
            </div>
        )
    }
})