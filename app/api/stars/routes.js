import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const stars = await prisma.stars.findFirst();
  return NextResponse.json({ count: stars?.count || 0 });
}

export async function POST() {
  const stars = await prisma.stars.findFirst();
  if (!stars)
    return NextResponse.json(
      { error: "Stars record not found" },
      { status: 404 }
    );

  const updatedStars = await prisma.stars.update({
    where: { id: stars.id },
    data: { count: stars.count + 1, updated_at: new Date() },
  });

  return NextResponse.json({ count: updatedStars.count });
}
