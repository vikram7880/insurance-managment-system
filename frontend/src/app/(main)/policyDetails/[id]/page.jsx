'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PolicyDetails = () => {

  const [policyDetails, setPolicyDetails] = useState(null);
  const {id} = useParams();

  const fetchPolicyData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/insurance/getbyid/`+id)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPolicyDetails(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchPolicyData();
  }, [])

  const displayPolicyData = () => {
    if (policyDetails !== null) {
      return <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img
            className="rounded-xl"
            src={`${process.env.NEXT_PUBLIC_API_URL}/${policyDetails.cover}`}
            alt="Image Description"
          />
        </div>
        {/* End Col */}
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                {policyDetails.title}
              </h2>
              <p>{policyDetails.provider}</p>
              <p className="text-gray-500">
                Besides working with start-up enterprises as a partner for
                digitalization, we have built enterprise products for common pain
                points that we have encountered in various products and projects.
              </p>
            </div>
            {/* End Title */}
            {/* List */}
            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Easy &amp; fast</span> designing
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  Powerful <span className="font-bold">features</span>
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                  <svg
                    className="flex-shrink-0 size-3.5"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  User Experience Design
                </span>
              </li>
            </ul>
            {/* End List */}
          </div>
        </div>
        {/* End Col */}
      </div>
    }
  }


  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        {
          displayPolicyData()
        }
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>

  )
}

export default PolicyDetails