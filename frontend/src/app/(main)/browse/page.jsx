'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Browse = () => {

    const [policyData, setPolicyData] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchPolicyData = async () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/insurance/getall`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPolicyData(data);
                setMasterList(data);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchPolicyData();
    }, [])

    const displayPolicies = () => {
        if (policyData.length > 0) {
            return policyData.map(policy => (
                <Link className="group rounded-xl overflow-hidden" href={"/policyDetails/" + policy._id}>
                    <div className="sm:flex">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img
                                className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {policy.title}
                            </h3>
                            <p className='mt-3 text-sm text-gray-600 dark:text-gray-400'>
                                {policy.category}
                            </p>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Produce professional, reliable streams easily leveraging Preline's
                                innovative broadcast studio
                            </p>
                            <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                Read more
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
                            </p>
                        </div>
                    </div>
                </Link>
            ))
        }else{
            return <div>No Policies Found</div>
        }
    }


    return (
        <div className='mt-20'>
            <>
                {/* Subscribe */}
                <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="max-w-xl text-center mx-auto">
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                                Find Insurance Policies for Your Needs
                            </h2>
                        </div>
                        <form>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <div className="w-full">
                                    <label htmlFor="hero-input" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        id="hero-input"
                                        name="hero-input"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <a
                                    className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    href="#"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Subscribe */}
            </>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-slate-300'>

                </div>
                <div className='col-span-10'>
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                            {displayPolicies()}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Browse;