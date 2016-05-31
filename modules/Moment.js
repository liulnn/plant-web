import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';


const tilesData = [
    {
        img: 'http://lorempixel.com/600/337/nature/',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'http://lorempixel.com/600/338/nature/',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://lorempixel.com/600/339/nature/',
        title: 'Camera',
        author: 'Danson67',
    },
];

export default React.createClass({
    render() {
        return (
            <Card>
                <CardHeader
                    title="Jack"
                    subtitle="my favorite"
                    avatar="http://lorempixel.com/100/100/nature/"
                />
                <div>
                    <GridList
                        cellHeight={50}
                    >
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.img}
                            >
                                <img src={tile.img}/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <CardText>Beijing</CardText>
                <CardActions>
                    <FlatButton label="Up"/>
                    <FlatButton label="Down"/>
                </CardActions>
            </Card>
        )
    }
})
