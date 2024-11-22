import { Container } from "@/components/general";

export default function NotFound() {
  return (
    <Container
      container="min-h-[100dvh]"
      className="flex flex-col items-center justify-center gap-4"
    >
      <h1 className="font-semibold text-8xl">¡OOPS!</h1>
      <p className="text-zinc-500 text-lg">Página no encontrada.</p>
    </Container>
  );
}
