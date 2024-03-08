import { useState } from 'react';
import React from 'react';
import TodoCard from './TodoCard';
import Todo from '../types/todo';


function TodoList({ data }: {data: any}) {
  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      {data ? (
        data.todos.map((todo:any) => <TodoCard onDelete={todo} id={todo.id} key={todo.id} body={todo.body} />)
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
}

export default TodoList;
