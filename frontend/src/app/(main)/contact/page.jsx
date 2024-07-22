'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const Contact = () => {

  const contactForm = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      email: '',
      PhoneNumber: '',
      Details: ''
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      // resetForm()
      // sending request to client

      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status === 200){
          toast.success('contact added')
         
        }else{
          toast.error('user added failed')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('contact added failed')
      });

    }
  })
  return (
    <div><>
    {/* Contact Us */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We'd love to talk about how we can help you.
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-lg mx-auto">
        {/* Card */}
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Fill in the form
          </h2>
          <form  onSubmit={contactForm.handleSubmit}>
            <div className="grid gap-4 lg:gap-6">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-firstname-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    
                    id="FirstName"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.FirstName}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-lastname-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                   
                    id="LastName"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.LastName}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-email-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    
                    id="email"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-phone-number-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.PhoneNumber}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>
                
              </div>
              <div>
                  <label
                    htmlFor="details"
                    className="block mb-2  text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    type="text"
                   
                    id="Details"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.Details}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                </div>
              {/* End Grid */}
             
            </div>
            {/* End Grid */}
            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Send inquiry
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      
    </div>
    {/* End Contact Us */}
  </>
  
  </div>
  

  
  
  )
}

export default Contact