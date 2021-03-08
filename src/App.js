import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.handleSubmit('ReactJs')
  }

  handleSubmit = async (searchTerm) => {
    const { data: { items } } = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    // console.log(items);
    this.setState({
      videos: items,
      selectedVideo: items[0]
    })
  }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid xs={4} item>
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
