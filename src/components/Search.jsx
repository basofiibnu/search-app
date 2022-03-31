import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { GrFormClose } from 'react-icons/gr';

import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative w-full max-w-[350px] md:max-w-full md:ml-0 md:w-full lg:ml-40 md:-mt-10 lg:-mt-10 mt-6 md:flex md:flex-col md:justify-center md:items-center lg:justify-start lg:w-auto lg:items-start">
      <input
        value={text}
        type="text"
        className="w-full max-w-[350px] md:max-w-[42rem] md:w-[24rem] lg:w-[42rem] h-8 dark:bg-gray-600 dark:border-gray-600 dark:text-white border rounded-full shadow-sm outline-none p-5 text-black hover:shadow-lg"
        placeholder="Search Goggle or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-2.5 right-4 text-2xl dark:text-gray-400 text-gray-900"
          onClick={() => setText('')}
        >
          <GrFormClose />
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
