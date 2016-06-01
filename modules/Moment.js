import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';


export default React.createClass({
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.author}
                    subtitle={this.props.content}
                    avatar={this.props.avatar}
                />
                <div>
                    <GridList cellHeight={50}>
                        {this.props.images.map((image) => (
                            <GridTile>
                                <img src={image.source} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <CardText>{this.props.address}</CardText>
                <CardActions>
                    <FlatButton label="Up"/>
                    <FlatButton label="Down"/>
                </CardActions>
            </Card>
        )
    }
})
