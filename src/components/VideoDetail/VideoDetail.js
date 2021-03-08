import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Fragment } from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <Fragment>
            <div style={{ width: '100%', height: '60%', margin: 'auto' }}>
                <Paper elevation={6} style={{ height: '70%' }}>
                    <iframe src={videoSrc} title="Video Player" frameborder="0" height="100%" width="100%"></iframe>
                </Paper>
                <Paper elevation={6} style={{ padding: '15px' }}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </div>
        </Fragment>
    )
}

export default VideoDetail
