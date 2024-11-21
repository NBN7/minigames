import { Container, SearchMinigame } from "@/components/general";

export default function Page() {
  return (
    <Container container="min-h-screen">
      <nav className="w-full flex items-center justify-end">
        <SearchMinigame />
      </nav>
    </Container>
  );
}
