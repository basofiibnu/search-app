import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { BsNewspaper } from 'react-icons/bs';
import { AiOutlinePicture } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';

const links = [
  { url: '/search', text: `Semua`, icon: <BiSearch /> },
  { url: '/news', text: 'News', icon: <BsNewspaper /> },
  { url: '/images', text: 'Images', icon: <AiOutlinePicture /> },
  { url: '/videos', text: 'Videos', icon: <RiVideoLine /> },
];

const Links = () => {
  return (
    <div className="flex justify-around md:justify-start gap-1 md:gap-3 items-center mt-4">
      {links.map(({ url, text, icon }) => (
        <NavLink
          to={url}
          className="m-2 mb-0 pb-1"
          activeClassName="text-blue-500 border-b-2 dark:text-blue-300 border-blue-500 pb-1"
        >
          <div className="flex items-center gap-2 hover:text-blue-300 transition-all duration-150 ease-in-out">
            {icon} {text}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
