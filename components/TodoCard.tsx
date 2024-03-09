"use client"
import React from 'react';

type Props = {
  body: string;
  completed?: boolean;
  id: number;
};

function TodoCard({ body, completed, id}: Props) {

  const handleDelete = async (id: number) => {
    console.log("test")
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, { 
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
    <form onSubmit={(e) => e.preventDefault}> {/* Prevent default form submission */}
      <div className='card select-none cursor-pointer'>
        <div className='card__wrapper flex justify-between p-4 border bg-white'>
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