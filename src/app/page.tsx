import { Container, MinigameCard } from "@/components/general";
import { MINIGAMES } from "@/constants/general";

export default function Page() {
  return (
    <Container innerClassName="mt-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {MINIGAMES.map((minigame) => (
          <MinigameCard
            key={minigame.NAME}
            minigame={minigame.NAME}
            description={minigame.DESCRIPTION}
            comingSoon={minigame.COMING_SOON}
          />
        ))}
      </div>
    </Container>
  );
}
