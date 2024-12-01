import type { TContributor } from "@/types/general";

export const getContributors = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/NBN7/minigames/contributors",
    );

    if (!res.ok) {
      console.error("Error fetching contributors");
      return [];
    }

    const contributors: TContributor[] = await res.json();

    return contributors;
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
};
