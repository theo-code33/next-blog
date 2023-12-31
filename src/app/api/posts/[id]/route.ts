import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const href = request.nextUrl.href.split("/");
  const id = href[href.length - 1];

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: +id,
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

export async function PUT(request: NextRequest) {
  const body = await request.json();
  if (!body) throw { code: 400, message: "No data provided" };

  const href = request.nextUrl.href.split("/");
  const id = href[href.length - 1];
  delete body.id;

  if (body.categoryId) {
    body.category = body.categoryId;
    delete body.categoryId;
  } else {
    delete body.categoryId;
  }
  if (!body.category) delete body.category;

  try {
    return prisma.post
      .update({
        where: {
          id: +id,
        },
        data: body,
      })
      .then((res) => {
        console.log(res);
        if (!res) throw { code: 404, message: "Post not found" };
        return NextResponse.json({
          status: 200,
          data: res,
        });
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
    const post = await prisma.post.delete({
      where: {
        id: +id,
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
