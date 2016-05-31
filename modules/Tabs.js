import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import ActionHome from 'material-ui/svg-icons/action/home';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import SocialPerson from 'material-ui/svg-icons/social/person';

export default React.createClass({
    render() {
        return (
            <Tabs initialSelectedIndex={this.props.index}>
                <Tab linkButton containerElement={<Link to="/plants" />} icon={<ImageCollections />}/>
                <Tab linkButton containerElement={<Link to="/home" />} icon={<ActionHome />}/>
                <Tab linkButton containerElement={<Link to="/profile" />} icon={<SocialPerson />}/>
            </Tabs>
        )
    }
})
