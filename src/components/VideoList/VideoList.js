import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from '../VideoItem';
import { Fragment } from 'react';

const VideoList = ({ videos, onSelectVideo }) => {
    return (
        <Grid container spacing={10}>
            {videos.map((video, i) => <VideoItem onSelectVideo={onSelectVideo} video={video} key={i} />)}
        </Grid>
    )
}

export default VideoList
