import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core';

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <Grid style={{ margin: '10px', padding: '0', width: 'auto !important' }} xs={12} item>
            <Paper style={{ display: 'flex !important', flexDirection: 'column !important', justifyContent: 'center !important', alignItems: 'center !important', cursor: 'pointer', padding: '20px', width: '80%' }} onClick={() => onSelectVideo(video)}>
                <img style={{ margin: 'auto !important', width: '90%' }} src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
                <Typography style={{ width: '90%', marginTop: '10px' }} variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
