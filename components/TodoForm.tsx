"use client"

import { useState, FormEvent } from 'react';
import { addTodo } from '../lib/db';

export default function TodoForm() {
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const todo = await addTodo(body.toString());
      setBody('');
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleAddTodo} className='flex flex-row border'>
      <input
        type='text'
        name='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className='ml-2 w-full outline-none text-white bg-black'
        placeholder='Uspokoj přítelkyni...'
      />
      <input
        type='submit'
        className='p-2 ml-auto bg-blue-500 hover:bg-blue-700 cursor-pointer'
        value={isLoading ? 'Adding Todo...' : 'Add Todo'}
        disabled={isLoading}
      />
    </form>
  );
}