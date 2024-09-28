'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SpaceDetails = () => {

  const { id } = useParams();
  const [spaceData, setSpaceData] = useState(null);

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/' + id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);

        setSpaceData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceDetails();
  }, [])


  return (
    <div>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-20 mx-auto">
          {/* Grid */}

          {
            spaceData !== null ? (
              <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                <div className="sm:order-2">
                  <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src={"http://localhost:5000/" +spaceData.image}
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:order-1">
                <div className=" me-3 mb-5 inline-flex items-center text-5xl gap-1.5 py-1.5 px-3 rounded-md font-bold text-white ">
                    {spaceData.title}
                  </div>
                  <div className=" me-3 mb-5 inline-flex items-center text-lg gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-white dark:bg-neutral-800 dark:text-neutral-200">
                    Services: {spaceData.services}
                  </div>
                  <div className=" me-3 mb-5 inline-flex items-center text-lg gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-white dark:bg-neutral-800 dark:text-neutral-200">
                    area: {spaceData.area}
                  </div>
                  <div className=" me-3 mb-5 inline-flex items-center text-lg gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-white dark:bg-neutral-800 dark:text-neutral-200">
                    Location: {spaceData.location}
                  </div>
                  <div className="mb-5 inline-flex items-center text-lg gap-1.5 py-1.5 px-3 rounded-md  font-medium bg-gray-100 text-white dark:bg-neutral-800 dark:text-neutral-200">
                   Price: {spaceData.price}
                  </div>
                
                 
                  <div className="mt-5">
                    <Link
                      className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 text-lg"
                      href={'/user/booking/'+id}
                    >
                      Book Now
                      <svg
                        className="flex-shrink-0 size-4"
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* End Col */}
              </div>
            ) : (
              <div>
                <h1>Not dta Found</h1>
              </div>
            )
          }

          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>

    </div>
  )
}

export default SpaceDetails;