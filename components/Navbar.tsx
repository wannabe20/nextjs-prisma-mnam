import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <header className='p-6 bg-gray-50 md:border border-b'>
      <h2 className='text-2xl font-semibold select-none'>MyTodos</h2>
    </header>
  );
}

export default Navbar;
