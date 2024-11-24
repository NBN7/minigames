import Link from "next/link";

interface CardProps {
  game: string;
}

export const Card = ({ game }: CardProps) => {
  return (
    <Link href={`/${game}`}>
      <div className="border">{game}</div>
    </Link>
  );
};
