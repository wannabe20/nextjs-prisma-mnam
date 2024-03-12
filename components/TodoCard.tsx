"use client"
import React from 'react';
import { delTodo } from '../lib/db';

type Props = {
  body: string;
  completed?: boolean;
  id: number;
};

function TodoCard({ body, completed, id}: Props) {

  const handleDelete = async (id: number) => {
    try {
      const todo = await delTodo(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <div className='card select-none cursor-pointer'>
        <div className='card__wrapper flex justify-between p-4 border'>
          <p className='text-lg font-semibold'>{body}</p>
          <button className='text-blue-500 hover:text-blue-700' onClick={() => handleDelete(id)}>
            {completed ? 'Completed' : 'Complete'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCard;