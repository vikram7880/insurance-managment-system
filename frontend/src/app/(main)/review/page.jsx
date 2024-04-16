'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const Review = () => {

    const reviewForm = useFormik({
        initialValues: {
          name: '',
          email: '',
         review: ""
    
        },
        onSubmit: (values) => {
          console.log(values);
    
          // sending request to backend
    
          fetch('http://localhost:5000/review/add', {
            method: 'POST',
            body: JSON.stringify(values), // convert js to json
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((response) => {
              console.log(response.status);
              if(response.status === 200){
                toast.success('review send successfully');
                
              }else{
                toast.error('something went wrong');
              }
            }).catch((err) => {
              console.log(err);
              toast.error('something went wrong');
            });
        }
      })
    return (
        <div>
            <div className="bg-gray py-6 sm:py-8 lg:py-12 mt-10">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
                            Get in touch
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated.
                        </p>
                    </div>
                    {/* text - end */}
                    {/* form - start */}
                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={reviewForm.handleSubmit}>
                        
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="mb-2 inline-block text-sm text-white sm:text-base"
                            >
                                Name*
                            </label>
                            <input
                                name="name"
                                id='name'
                                value={reviewForm.values.name}
                                onChange={reviewForm.handleChange}
                                className="w-full rounded border bg-gray px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                       
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="mb-2 inline-block text-sm text-white sm:text-base"
                            >
                                Email*
                            </label>
                            <input
                                name="email"
                                id='email'
                                value={reviewForm.values.email}
                                onChange={reviewForm.handleChange}
                                className="w-full rounded border bg-gray px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                       
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="review"
                                className="mb-2 inline-block text-sm text-white sm:text-base"
                            >
                                Rewiew*
                            </label>
                            <textarea
                                name="review"
                                id='review'
                                value={reviewForm.values.review}
                                onChange={reviewForm.handleChange}
                                className="h-64 w-full rounded border bg-gray px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                                defaultValue={""}
                            />
                        </div>
                        <div className="flex items-center justify-between sm:col-span-2">
                            <button type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Submit
                            </button>
                           
                        </div>
                      
                    </form>
                    {/* form - end */}
                </div>
            </div>

        </div>
    )
}

export default Review