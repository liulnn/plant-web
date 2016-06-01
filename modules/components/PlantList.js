import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PlantStore from '../stores/PlantStore';

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


export default React.createClass({
    getInitialState: function () {
        return {plants: PlantStore.getAll()};
    },
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cols={2}
                    cellHeight={200}
                    style={styles.gridList}
                >
                    {this.state.plants.map((tile) => (
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


