const API_KEY = "81f382d33088c6d52099a62eab51d967";

const requests = {
  pageOne: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  pageTwo: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
  pageThree: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`,
};
export default requests;
