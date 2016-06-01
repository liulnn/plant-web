import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Tabs from './Tabs';
import PlantList from './PlantList';

export default React.createClass({
    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/home"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton><ActionSearch /></IconButton>}
                />
                <PlantList />
                <Tabs index={0}/>
            </div>
        )
    }
})


