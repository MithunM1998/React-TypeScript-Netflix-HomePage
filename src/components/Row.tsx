import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
`;

const RowTitle = styled.h2`
  font-size: 1.5rem;
`;

const MoviePoster = styled.img`
  width: 150px;
  object-fit: contain;
  margin-right: 10px;
`;

interface Movie {
  id: number;
  title?: string; // Marked optional as API data may be inconsistent
  poster_path?: string;
}

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
`;

const Row: React.FC<{ title: string; fetchUrl: string }> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get<{ results: Movie[] }>(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const filteredMovies = movies.filter(
    (movie) => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <SearchInput
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredMovies.map((movie) => (
          <MoviePoster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title || 'No Title'}
          />
        ))}
      </div>
    </RowContainer>
  );
};

export default Row;
