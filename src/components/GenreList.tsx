import useGenres from '../hooks/useGenres';

function GenreList() {
  const { error, genres, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
