import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';

type Props = {};

function TodoForm({}: Props) {
  const [body, setBody] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setisLoading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post('/api/todos', { body }, config);

      console.log(data);

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
          placeholder='Buy Tomatoes'
        />
        <input
          type='submit'
          className='p-2 ml-auto bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
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
