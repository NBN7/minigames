import { Container } from "@/components/general";

export default function NotFound() {
  return (
    <Container innerClassName="min-h-[calc(100dvh-72px)] flex flex-col items-center justify-center gap-4">
      <h1 className="text-8xl font-semibold">¡OOPS!</h1>
      <p className="text-lg text-zinc-500">Página no encontrada.</p>
    </Container>
  );
}
