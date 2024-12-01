"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { TContributor } from "@/types/general";
import Link from "next/link";

interface ContributorCardProps {
  contributor?: TContributor;
}

export const ContributorCard = ({ contributor }: ContributorCardProps) => {
  if (!contributor) {
    return (
      <Card className="flex h-full flex-col">
        <CardHeader className="flex-grow">
          <CardTitle className="capitalize">¡OOPS!</CardTitle>
          <CardDescription>
            Error cargando a los colaboradores. Por favor intente más tarde.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-grow flex-row items-center gap-6">
        <Image
          src={contributor.avatar_url}
          alt={contributor.login}
          className="rounded-full border-2"
          width={80}
          height={80}
        />
        <div>
          <CardTitle className="capitalize">{contributor.login}</CardTitle>
          <CardDescription>
            {contributor.contributions} contribuciones
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="p-0">
        <Link href={contributor.html_url} target="_blank" className="w-full">
          <Button variant="link" className="w-full uppercase">
            Ver perfil
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
