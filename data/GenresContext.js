import React, { createContext, useState, useContext } from 'react';

const GenresContext = createContext();

// genres provider to store list of movie & tvshow genres
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

// custom hook to use genres context
const useGenres = () => {
  const context = useContext(GenresContext);
  if (context === undefined) {
    throw new Error('useGenres must be used within a GenresProvider');
  }
  return context;
};

export { GenresProvider, useGenres };
