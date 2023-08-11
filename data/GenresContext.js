import React, { createContext, useState, useContext } from 'react';

// genres context to store list of movie & tvshow genres
const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  return (
    <GenresContext.Provider
      value={{ movieGenres, setMovieGenres, tvGenres, setTvGenres }}>
      {children}
    </GenresContext.Provider>
  );
};

const useGenres = () => {
  const context = useContext(GenresContext);
  if (context === undefined) {
    throw new Error('useGenres must be used within a GenresProvider');
  }
  return context;
};

export { GenresProvider, useGenres };
