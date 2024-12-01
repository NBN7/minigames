import Link from "next/link";
import { Container, ContributorCard } from "@/components/general";
import type { TContributor } from "@/types/general";

const getContributors = async () => {
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

export default async function ContributorsPage() {
  const contributors = await getContributors();

  return (
    <Container innerClassName="mt-12">
      <div className="mb-12 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold uppercase">Colaboradores</h1>
        <Link
          href="https://github.com/NBN7/minigames"
          target="_blank"
          className="w-full text-center text-sm text-zinc-500 hover:underline"
        >
          https://github.com/NBN7/minigames
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {contributors.map((contributor) => (
          <ContributorCard key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </Container>
  );
}
