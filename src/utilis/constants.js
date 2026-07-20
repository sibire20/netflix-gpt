

export const Now_playingURI = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const movieDBApiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWU0MTY3ZWFmZDE0NzllNzM3ODA5ZmU3ZmZiOThkZCIsIm5iZiI6MTc4MzY1MzMxNC40LCJzdWIiOiI2YTUwNjNjMjY2YmNhZTg1NzRhYmRlZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YdXaLWE4Qyl_U-E6BqqgGcl-1ujNugwVpyPGU_VBlDM"

export const OPTIONS_NOWPLAYING = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: movieDBApiKey}
};