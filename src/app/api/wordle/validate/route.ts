import { NextResponse, type NextRequest } from "next/server";
import { validWords } from "@/constants/wordle";

export async function GET(req: NextRequest) {
  const word = req.nextUrl.searchParams.get("word")?.toLowerCase();

  if (!word)
    return NextResponse.json({
      message: "You should send a word to validate it",
    });

  if ((validWords as string[]).includes(word)) {
    return NextResponse.json({ isValid: true });
  }

  return NextResponse.json({ isValid: false });
}
