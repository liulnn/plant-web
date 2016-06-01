import React from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import {Card, CardMedia} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default React.createClass({
    render() {
        return (
            <div>
                <Card>
                    <CardMedia>
                        <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>
                </Card>
                <div>
                    <SocialPerson />
                    <TextField
                        id="text-field-default"
                        defaultValue="Jack"
                    />
                </div>
                <div>
                    <CommunicationPhone />
                    <TextField
                        id="text-field-default"
                        defaultValue="239**4827"
                    />
                </div>
                <div>
                    <CommunicationEmail />
                    <TextField
                        id="text-field-default"
                        defaultValue="email@126.com"
                    />
                </div>
                <div>
                    <MapsPlace />
                    <TextField
                        id="text-field-default"
                        defaultValue="Beijing"
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