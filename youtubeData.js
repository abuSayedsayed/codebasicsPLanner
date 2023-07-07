
// Load the YouTube Data API library
gapi.load('client', initialize);

// Initialize the API client library
function initialize() {
  gapi.client.init({
    apiKey: 'AIzaSyAdk-v4KjPGfCHFTPksHnSRbvCY-cSSoSk',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  }).then(function() {
    // Call the function to get playlist videos
    getPlaylistVideos('PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO');
  }).catch(function(error) {
    console.log('Error loading YouTube API:', error);
  });
}

// Retrieve all video links from a playlist
function getPlaylistVideos(playlistId, pageToken = '') {
  var request = gapi.client.youtube.playlistItems.list({
    part: 'contentDetails',
    playlistId: playlistId,
    maxResults: 50,
    pageToken: pageToken
  });

  const request =gapi.client.youtube.

  request.execute(function(response) {
    var videoLinks = [];

    // Process each video in the playlist
    response.items.forEach(function(item) {
      console.log(item)
    });

    // Print the video links
    // videoLinks.forEach(function(video) {
    //   console.log(video);
    // });

    // Check for next page
    var nextPageToken = response.nextPageToken;
    if (nextPageToken) {
      getPlaylistVideos(playlistId, nextPageToken);
    }
  });
}
