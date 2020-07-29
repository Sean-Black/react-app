const songsReducer = () => {
    [
        {title: 'Macerena', duration: '3:07'},
        {title: 'No Scrubs', duration: '3:11'},
        {title: 'I want it that way', duration: '2:59'},
        {title: 'Dont believe the hype', duration: '4:59'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
      return action.payload;
      
  }
  return selectedSong;
}