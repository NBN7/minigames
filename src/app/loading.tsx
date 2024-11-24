import { Container } from "@/components/general";
import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <Container
      outerClassName="min-h-[calc(100dvh-72px)]"
      innerClassName="flex items-center justify-center"
    >
      <Loader2Icon className="animate-spin" />
    </Container>
  );
}
