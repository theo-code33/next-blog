import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const href = request.nextUrl.href.split("/");
  const id = href[href.length - 1];
  try {
    const category = await prisma.category.findUniqueOrThrow({
      where: {
        id: +id,
      },
      include: {
        posts: true,
      },
    });

    if (!category) throw { code: 404, message: "Category not found" };

    return NextResponse.json({
      status: 200,
      data: category,
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

  const href = request.nextUrl.href.split("/");
  const id = href[href.length - 1];

  try {
    const categories = await prisma.category.update({
      where: {
        id: +id,
      },
      data: {
        ...body,
      },
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

export async function DELETE(request: NextRequest) {
  const href = request.nextUrl.href.split("/");
  const id = href[href.length - 1];
  try {
    const category = await prisma.category.delete({
      where: {
        id: +id,
      },
    });
    if (!category) throw { code: 404, message: "Category not found" };
    return NextResponse.json({
      status: 200,
      data: {
        id: category.id,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.code || 500,
      data: error.message,
    });
  }
}
