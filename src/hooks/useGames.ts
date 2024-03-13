import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    
    return () => controller.abort();
  }, []);

  return { error, games };
}

export default useGames;