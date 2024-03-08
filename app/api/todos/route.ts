import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import ITodo from '../../../types/todo';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse){
  try {
    const todos = await prisma.todo.findMany();
    revalidatePath("/", "layout")
    return NextResponse.json({todos}, {status: 200});
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json("failed")
}

export async function POST(req: NextRequest, res: NextResponse){
  const params = await req.json();
  try {
    const todos = await prisma.todo.create({
      data: {
        body: params,
      },
    });
    revalidatePath("/", "layout")
    return NextResponse.json({todos}, {status: 200});
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json("failed")
}