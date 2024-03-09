import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response){
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({todos}, {status: 200});
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json("failed")
}

export async function POST(req: Request, res: Response){
  const params = await req.json();
  const todos = await prisma.todo.create({
    data: {
      body: params,
    },
  });
  
  if(!todos){
    return NextResponse.json("failed")
  }

  await revalidatePath("/")
  return NextResponse.json({todos}, {status: 200});
}