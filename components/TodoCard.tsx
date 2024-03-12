import React from 'react';
import { delTodo } from '../lib/db';

type Props = {
  body: string;
  completed?: boolean;
  id: number;
};

function TodoCard({ body, completed, id}: Props) {

  async function handleDelete(){
    "use server"
    try {
      const todo = await delTodo(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleDelete}>
      <div className='card select-none cursor-pointer'>
        <div className='card__wrapper flex justify-between p-4 border'>
          <p className='text-lg font-semibold'>{body}</p>
          <button className='text-blue-500 hover:text-blue-700'>
            {completed ? 'Completed' : 'Complete'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCard;