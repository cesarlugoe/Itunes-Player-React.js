import axios from 'axios';

class ItunesServer {

  constructor() {
    this.itunes = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  findTunes(query) {
    const parsedQuery = query.replace(/ /g, '+');
    return this.itunes.get(`https://itunes.apple.com/search?term=${parsedQuery}&entity=song&limit=25`)
    .then(( tunesResponse ) =>  tunesResponse );
  }

  findTuneById(songId){
    return this.itunes.get(`https://itunes.apple.com/lookup?id=${songId}&entity=song`)
    .then(( tunesResponse ) => tunesResponse );
  } 
}

const itunesServer = new ItunesServer();

export default itunesServer;
