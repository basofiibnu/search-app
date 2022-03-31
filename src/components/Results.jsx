import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else if (location.pathname === '/images') {
        getResults(`/image/q=${searchTerm}&num=40`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-col flex-wrap justify-between space-y-4 md:px-8 lg:px-44 min-h-screen">
          <p className="pt-3 text-sm text-gray-700 dark:text-gray-400">
            Sekitar {results.length} hasil
          </p>
          {results?.map(({ link, title, description }, i) => (
            <div key={i} className="lg:w-3/5 md:w-5/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm mb-1">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm dark:text-gray-300 text-gray-700">
                  {description}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case '/images':
      return (
        <div className="flex flex-wrap gap-5 md:gap-0 justify-center items-center min-h-screen mt-5">
          {results?.map(({ image, link: { href, title } }, i) => (
            <a
              className="p-0 md:p-5"
              href={href}
              key={i}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image?.src}
                alt={title}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
      break;
    case '/videos':
      return (
        <div className="flex flex-row items-center justify-center flex-wrap mt-5 min-h-screen">
          {results.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0].href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="335px"
                  height="220px"
                />
              )}
            </div>
          ))}
        </div>
      );
      break;
    case '/news':
      return (
        <div className="flex flex-col flex-wrap justify-between space-y-5 md:px-8 lg:px-44 min-h-screen">
          <p className="pt-3 text-sm text-gray-700 dark:text-gray-400">
            Sekitar {results.length} hasil
          </p>
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-5/5 lg:w-3/5 w-full">
              <div className="border rounded-lg border-gray-200 dark:border-gray-600 p-5">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <p className="text-lg dark:text-gray-100 text-blue-700 hover:text-blue-900 mb-2 dark:hover:text-blue-300 transition-all duration-150 ease-in-out">
                    {title}
                  </p>
                  <div className="flex gap-4 text-sm dark:text-gray-400 text-gray-900">
                    <a
                      href={source?.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source?.href}
                    </a>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
      break;
    default:
      return <div>Tidak ditemukan apapun</div>;
  }
};

export default Results;
