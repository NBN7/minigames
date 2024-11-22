import { Container } from "@/components/general";
import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <Container
      container="min-h-[100dvh]"
      className="flex items-center justify-center"
    >
      <Loader2Icon className="animate-spin" />
    </Container>
  );
}
