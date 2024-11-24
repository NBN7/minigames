"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  minigame: string;
  description: string;
  comingSoon?: boolean;
}

export const MinigameCard = ({
  minigame,
  description,
  comingSoon,
}: CardProps) => {
  const router = useRouter();

  const handleClick = () => router.push(`/${minigame}`);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <CardTitle className="capitalize">{minigame}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-0">
        <Button
          variant="link"
          className="w-full uppercase"
          onClick={handleClick}
          disabled={comingSoon}
        >
          Jugar
        </Button>
      </CardFooter>
    </Card>
  );
};
