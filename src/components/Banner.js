import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../api/tmdb';
import { requests } from '../api/tmdb';

const BannerContainer = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  position: relative;
  margin-bottom: 20px;
`;

const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
  position: relative;
  z-index: 1;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const BannerFade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        if (response.data.results && response.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.results.length);
          const selectedMovie = response.data.results[randomIndex];
          if (selectedMovie.backdrop_path) {
            setMovie(selectedMovie);
          }
        }
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    }
    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <BannerContainer
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerDescription>
          {movie?.overview}
        </BannerDescription>
      </BannerContent>
      <BannerFade />
    </BannerContainer>
  );
}

export default Banner; 