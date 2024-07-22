'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Navbar from '../../navbar';
import Footer from '../../footer';


const Booking = () => {

  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

  const router = useRouter();

  const bookingForm = useFormik({
    initialValues: {
      bookingDate: ''
    },
    onSubmit: async (values) => {
      const res = await axios.post('http://localhost:5000/booking/add', {
        bookingDate: values.bookingDate,
        user: currentUser._id,
        space: id
      });
      console.log(res.status);
      if (res.status === 200) {
        toast.success('Booking Successfull');
        router.push('/user/booked-spaces');
      } else {
        toast.error('Booking Failed');
      }
    }
  })

  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                Payment
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Manage your payment methods.
              </p>
            </div>
            <form onSubmit={bookingForm.handleSubmit}>

              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-billing-contact"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Select Booking Date
                </label>
                <div className="mt-2 space-y-3">
                  <input
                    id="bookingDate"
                    onChange={bookingForm.handleChange}
                    value={bookingForm.values.bookingDate}
                    type="date"
                    className="py-2 px-3 pe-11 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Select Date of Booking"
                  />
                </div>
              </div>

              {/* Section */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-billing-address"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Billing address
                </label>
                <div className="mt-2 space-y-3">
                  <input
                    id="af-payment-billing-address"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Street Address"
                  />
                  <input
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Apt, Syuite, Building (Optional)"
                  />
                  <div className="grid sm:flex gap-3">
                    <input
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Zip Code"
                    />
                    <select className="py-2 px-3 pe-9 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                      <option selected="">City</option>
                      <option>Lucknow</option>
                      <option>Delhi</option>
                      <option>Patna</option>
                    </select>
                    <select className="py-2 px-3 pe-9 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                      <option selected="">State</option>
                      <option>Uttar Pradesh</option>
                      <option>Delhi</option>
                      <option>Bihar</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End Section */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="submit"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Book Space
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>

    </div>
  )
}

export default Booking