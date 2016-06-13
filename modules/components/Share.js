import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import ContentCreate from 'material-ui/svg-icons/content/create';


export default React.createClass({
    getInitialState: function () {
        return {
            content: '',
            images: [],
            address: 'beijing'
        };
    },
    render() {
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton linkButton={true} href="#/"><NavigationArrowBack /></IconButton>}
                    iconElementRight={<FlatButton label="Send" />}
                />
                <form>
                    <div>
                        <ContentCreate />
                        <TextField
                            name="content"
                            multiLine={true}
                            hintText="Write what you want to share!"
                        />
                    </div>
                    <div>
                        <MapsPlace />
                        <TextField
                            name="place"
                            hintText="Write your address"
                        />
                    </div>
                    <div>
                        <FileFileUpload />
                        <input type="file" name="photo"/>
                    </div>
                </form>
            </div>
        )
    }
})
