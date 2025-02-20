import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../api/tmdb';

const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const RowPoster = styled.img`
  object-fit: contain;
  width: ${props => props.isLargeRow ? "160px" : "240px"};
  max-height: ${props => props.isLargeRow ? "250px" : "150px"};
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  
  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        if (response.data.results) {
          const filteredMovies = response.data.results.filter(
            movie => movie.poster_path && movie.backdrop_path
          );
          setMovies(filteredMovies);
        }
      } catch (error) {
        console.error("Error fetching row data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (!movies.length) return null;

  return (
    <RowContainer>
      <Title>{title}</Title>
      <RowPosters>
        {movies.map(movie => (
          <RowPoster
            key={movie.id}
            isLargeRow={isLargeRow}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title || movie.name}
            loading="lazy"
          />
        ))}
      </RowPosters>
    </RowContainer>
  );
}

export default Row; 