"use client"
import React from 'react';

type Props = {
  body: string;
  completed?: boolean;
  id: number;
};

function TodoCard({ body, completed, id}: Props) {

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`process.env.https://nextjs-prisma-mnam-iota.vercel.app/api/todos/${id}`, { 
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        })
      });
      if (!res.ok) {
        throw new Error('Failed to delete todo');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault}>
    <div className='card select-none cursor-pointer flex flex-col justify-center'> 
      <div className='card__wrapper flex justify-between p-4 border w-64'>
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