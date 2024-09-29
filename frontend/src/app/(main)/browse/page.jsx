'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar';

const locations = [
  'Lucknow',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai'
]

const Browse = () => {

  const [spaceList, setSpaceList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchSpaceData = () => {
    fetch('http://localhost:5000/space/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setSpaceList(data);
        setMasterList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceData();
  }, []);

  const displaySpaces = () => {
    return spaceList.map(space => (
      <Link href={"/space-details/" + space._id} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={'http://localhost:5000/' + space.image}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-lg text-gray-400 font-bold">{space.title}</h3>
        <h3 className="mb-4 text-md text-gray-400">{space.location}</h3>
        <p className="mt-1 text-lg font-medium text-gray-300">₹{space.price}</p>
      </Link>
    ))
  }

  const searchSpace = (e) => {
    const value = e.target.value;
    const filteredSpaces = masterList.filter(space => space.title.toLowerCase().includes(value.toLowerCase()));
    setSpaceList(filteredSpaces);
  }

  const searchLocation = (value) => {
    const filteredSpaces = masterList.filter(space => space.location.toLowerCase().includes(value.toLowerCase()));
    setSpaceList(filteredSpaces);
  }

  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <>
            {/* Hero */}
            <div className="relative overflow-hidden">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                <div className="text-center">
                  <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
                    Search Flexible Office Space
                  </h1>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    Find the perfect space for your business
                  </p>
                  <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                    {/* Form */}
                    <form>
                      <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                        <div className="flex-[1_0_0%] ">
                          <label
                            htmlFor="hs-search-article-1"
                            className="block text-sm text-gray-700 font-medium dark:text-white"
                          >
                            <span className="sr-only">Search article</span>
                          </label>
                          <input
                            type="text"
                            onChange={searchSpace}
                            className="py-2.5 px-4 block w-full bg-white border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Search Space ... "
                          />
                        </div>
                        <div className="flex-[0_0_auto] ">
                          <a
                            className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                          >
                            <svg
                              className="flex-shrink-0 size-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx={11} cy={11} r={8} />
                              <path d="m21 21-4.3-4.3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* End Form */}
                    {/* SVG Element */}
                    <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                      <svg
                        className="w-16 h-auto text-orange-500"
                        width={121}
                        height={135}
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                          stroke="currentColor"
                          strokeWidth={10}
                          strokeLinecap="round"
                        />
                        <path
                          d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                          stroke="currentColor"
                          strokeWidth={10}
                          strokeLinecap="round"
                        />
                        <path
                          d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                          stroke="currentColor"
                          strokeWidth={10}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    {/* End SVG Element */}
                    {/* SVG Element */}
                    <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                      <svg
                        className="w-40 h-auto text-cyan-500"
                        width={347}
                        height={188}
                        viewBox="0 0 347 188"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                          stroke="currentColor"
                          strokeWidth={7}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    {/* End SVG Element */}
                  </div>
                  <div className="mt-10 sm:mt-20">
                    {
                      locations.map(location => (
                        <button
                          className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          onClick={() => searchLocation(location)}
                        >
                          {location}
                        </button>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* End Hero */}
          </>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {displaySpaces()}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Browse;