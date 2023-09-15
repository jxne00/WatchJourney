import { createContext, useState, useContext } from 'react';

const GenresContext = createContext();

/**
 * @description genres provider to store list of movie & tvshow genres
 */
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

/**
 * @description custom hook to use genres context
 */
const useGenres = () => {
  const context = useContext(GenresContext);
  return context;
};

export { GenresProvider, useGenres };
