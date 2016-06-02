import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default React.createClass({
    getInitialState: function () {
        return {
            content: '',
            images: [],
            address: ''
        };
    },
    render() {
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton linkButton={true} href="#/home"><NavigationArrowBack /></IconButton>}
                    iconElementRight={<FlatButton label="Send" />}
                />
                <div>
                    <TextField
                        multiLine={true}
                        fullWidth={true}
                        hintText="Write what you want to say!"
                    /><br />
                    <FlatButton
                        label="Add your photos"
                        linkButton={true}
                        href="#"
                        icon={<ContentAdd />}
                    /><br />
                    <FlatButton
                        label="Your place"
                        linkButton={true}
                        href="#"
                        icon={<MapsPlace />}
                    /><br />
                </div>
            </div>
        )
    }
})
