import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        category: true,
      },
    });
    if (!posts) throw { code: 404, message: "Post not found" };
    return NextResponse.json({
      status: 200,
      data: posts,
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
    const post = await prisma.post.create({
      data: {
        ...body,
      },
      include: {
        category: true,
      },
    });

    if (!post) throw { code: 404, message: "Post not found" };

    return NextResponse.json({
      status: 201,
      data: post,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.code || 500,
      data: error.message,
    });
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  if (!body) throw { code: 400, message: "No data provided" };

  const basePath = request.nextUrl.basePath.split("/");
  const id = basePath[basePath.length - 1];

  try {
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        ...body,
      },
      include: {
        category: true,
      },
    });

    if (!post) throw { code: 404, message: "Post not found" };

    return NextResponse.json({
      status: 200,
      data: post,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.code || 500,
      data: error.message,
    });
  }
}
