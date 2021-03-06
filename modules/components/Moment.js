import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';


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
                            <GridTile key={image.source}>
                                <img src={image.source}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <CardText>{this.props.address}</CardText>
                <CardActions>
                    <IconButton><ActionThumbUp /></IconButton>
                    <IconButton><ActionThumbDown /></IconButton>
                </CardActions>
            </Card>
        )
    }
})
