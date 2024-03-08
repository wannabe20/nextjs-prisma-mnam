import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, res: NextResponse, { params }: { params: { id: string } }){
    try {
      const todos = await prisma.todo.delete({
        where: {
          id: parseInt(params.id),
        },
      });

      revalidatePath("/", "layout")
      return NextResponse.json("success", {status: 200});
    } catch (error) {
      console.error(error);
    }
    return NextResponse.json("failed")
  }
