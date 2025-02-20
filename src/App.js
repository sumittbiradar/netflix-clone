import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import { requests } from './api/tmdb';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row 
        title="Your Next Watch"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row 
        title="Top 10 Movies in India Today"
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Exciting TV Shows"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default App; 