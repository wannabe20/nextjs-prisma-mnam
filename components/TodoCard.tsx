"use client"
import React from 'react';

type Props = {
  body: string;
  completed?: boolean;
  id: number;
  onDelete: (id: number) => void; // Function to handle deletion
};

function TodoCard({ body, completed, id, onDelete }: Props) {

  const handleDelete = async (id: number) => { // Use separate function for clarity
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, { 
        // Use template literal and include id
        method: 'DELETE', // DELETE for deletion
        headers: {
          'content-type': 'application/json',
        },
        
      });
      onDelete(id); // Call the onDelete prop function to manage deletion logic


      if (!res.ok) { // Check for successful response
        throw new Error('Failed to delete todo');
      }

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
      <div className='card select-none cursor-pointer'>
        <div className='card__wrapper flex justify-between p-4 border bg-white'>
          <p className='text-lg font-semibold'>{body}</p>
          <button value={id} className='text-blue-500 hover:text-blue-700' onClick={() => handleDelete(id)}>
            {completed ? 'Completed' : 'Complete'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCard;