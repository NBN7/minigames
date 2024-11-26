import { useEffect } from "react";

export const useSetRecentlyPlayed = (game: string) => {
  useEffect(() => {
    const recentlyPlayed = localStorage.getItem("recentlyPlayed");
    if (recentlyPlayed) {
      const games = JSON.parse(recentlyPlayed) as string[];
      if (!games.includes(game)) {
        localStorage.setItem(
          "recentlyPlayed",
          JSON.stringify([game, ...games.slice(0, 4)]),
        );
      }
    } else {
      localStorage.setItem("recentlyPlayed", JSON.stringify([game]));
    }
  }, [game]);
};
