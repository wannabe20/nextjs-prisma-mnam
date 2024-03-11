import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTodos(){
    const todos = await prisma.todo.findMany({})
    if(!todos) return null;
    return todos;
}