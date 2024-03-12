import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ data }: {data: any}) {
  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      {data ? (
        data.map((todo:any, index: number) => <TodoCard id={todo.id} key={index} body={todo.body} />)
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
}

export default TodoList;
