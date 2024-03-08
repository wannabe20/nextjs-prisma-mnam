"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/dist/server/api-utils';

type Props = {};

function TodoForm({}: Props) {
  const [body, setBody] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    try {
      console.log()
      const res = await fetch('http://localhost:3000/api/todos',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json'
        }
      })

      setisLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='p-6 border-l border-r'>
      <form onSubmit={handleAddTodo} className='flex flex-row bg-white border'>
        <input
          type='text'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className='ml-2 w-full outline-none'
          placeholder='Uspokoj přítelkyni...'
        />
        <input
          type='submit'
          className='p-2 ml-auto bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'
          value='Add Todo'
        />
      </form>
      {isLoading && (
        <p className='mt-4 p-2 bg-blue-400 rounded-md text-white select-none'>
          Loading...
        </p>
      )}
    </section>
  );
}

export default TodoForm;
