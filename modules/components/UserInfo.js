import React from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import {Card, CardMedia} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import UserInfoStore from '../stores/UserInfoStore';

export default React.createClass({
    getInitialState: function () {
        return {userInfo: UserInfoStore.getUserById(1)};
    },
    render() {
        return (
            <div>
                <Card>
                    <CardMedia>
                        <img src={this.state.userInfo.avatar}/>
                    </CardMedia>
                </Card>
                <div>
                    <SocialPerson />
                    <TextField
                        id="text-field-default"
                        defaultValue={this.state.userInfo.username}
                    />
                </div>
                <div>
                    <CommunicationPhone />
                    <TextField
                        id="text-field-default"
                        defaultValue={this.state.userInfo.phone}
                    />
                </div>
                <div>
                    <CommunicationEmail />
                    <TextField
                        id="text-field-default"
                        defaultValue={this.state.userInfo.email}
                    />
                </div>
                <div>
                    <MapsPlace />
                    <TextField
                        id="text-field-default"
                        defaultValue={this.state.userInfo.place}
                    />
                </div>
                <div>
                    <ContentAdd />
                    <TextField
                        hintText="add note"
                    />
                </div>
            </div>
        )
    }
})