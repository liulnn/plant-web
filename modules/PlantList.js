import React from 'react'
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Tabs from './Tabs';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    },
};

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
    {
        img: 'http://lorempixel.com/600/336/nature/',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'http://lorempixel.com/600/335/nature/',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://lorempixel.com/600/334/nature/',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://lorempixel.com/600/333/nature/',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://lorempixel.com/600/332/nature/',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

export default React.createClass({
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cols={2}
                    cellHeight={200}
                    style={styles.gridList}
                >
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
})


