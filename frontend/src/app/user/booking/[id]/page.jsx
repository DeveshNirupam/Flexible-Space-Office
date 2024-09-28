'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const appearance = {
  theme: "day",
};

const Booking = () => {

  const { id } = useParams();
  const hasRun = useRef(false);

  // console.log(stripePromise);
  const [clientSecret, setClientSecret] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [spaceDetails, setSpaceDetails] = useState(null);

  const router = useRouter();
  const bookingDateRef = useRef();

  const stripePromise = loadStripe('pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1');

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/' + id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setCarDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceDetails();
  }, [])

  const bookSpace = () => {
    axios.post('http://localhost:5000/booking/add', {
      bookingDate: bookingDateRef.current.value,
      user: currentUser._id,
      space: id
    })
      .then((result) => {
        toast.success('Booking Successfull');
        router.push('/user/booked-spaces');
      }).catch((err) => {
        console.log(err);
        toast.error('Booking Failed');
      });
  }

  const getPaymentIntent = async () => {

    const shipping = {
      name: currentUser.name,
      address: {
        line1: 'address line1',
        postal_code: '226001',
        country: "IN",
      },
    };

    sessionStorage.setItem("shipping", JSON.stringify(shipping));

    const res = await fetch(
      `http://localhost:5000/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: carDetails.price,
          customerData: shipping,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    setClientSecret(data.clientSecret);
  };

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

            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium dark:text-white"
              >
                Select Booking Date
              </label>
              <div className="mt-2 space-y-3">
                <input
                  ref={bookingDateRef}
                  type="date"
                  className="py-2 px-3 pe-11 block w-full border-2 border-white shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Select Date of Booking"
                />
              </div>
            </div>

            <div className="mt-5 gap-x-2">
              <button
                onClick={getPaymentIntent}
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Proceed To Pay
              </button>
            </div>
            {
              clientSecret && (
                <Elements stripe={stripePromise} options={{
                  clientSecret,
                  appearance
                }}>
                  <PaymentGateway email={emailRef.current.value} spaceDetails={spaceDetails} />
                </Elements>
              )
            }
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>

    </div>
  )
}

export default Booking