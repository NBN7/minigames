import { Container, MinigameCard } from "@/components/general";
import { MINIGAMES } from "@/constants/general";

export default function Page() {
  return (
    <Container innerClassName="mt-12">
      <div className="grid sm:grid-cols-2 gap-6">
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
