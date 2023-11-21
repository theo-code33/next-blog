import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
      },
    });
    if (!categories) throw { code: 404, message: "Category not found" };
    return NextResponse.json({
      status: 200,
      data: categories,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.code || 500,
      data: error.message,
    });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body) throw { code: 400, message: "No data provided" };

  try {
    const category = await prisma.category.create({
      data: {
        ...body,
      },
    });

    if (!category) throw { code: 404, message: "Category not found" };

    return NextResponse.json({
      status: 201,
      data: category,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.code || 500,
      data: error.message,
    });
  }
}
