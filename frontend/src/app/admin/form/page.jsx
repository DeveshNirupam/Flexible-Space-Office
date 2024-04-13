import React from 'react'

const Form = () => {
  return (
    <div>
    {/* Card Section */}
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form>
        {/* Card */}
        <div className="bg-white rounded-xl shadow dark:bg-slate-900">
          <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 end-0 p-4">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1={12} x2={12} y1={3} y2={15} />
                </svg>
                Upload header
              </button>
            </div>
          </div>
          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            {/* Grid */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="sr-only">Product photo</label>
                <div className="grid sm:flex sm:items-center sm:gap-x-5">
                  <img
                    className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800"
                    src="../assets/img/160x160/img1.jpg"
                    alt="Image Description"
                  />
                  <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    >
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1={12} x2={12} y1={3} y2={15} />
                      </svg>
                      Upload logo
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-project-name"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Project name
                </label>
                <input
                  id="af-submit-app-project-name"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter project name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-project-url"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Project URL
                </label>
                <input
                  id="af-submit-project-url"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="https://example.so"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-upload-images"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Preview image
                </label>
                <label
                  htmlFor="af-submit-app-upload-images"
                  className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                >
                  <input
                    id="af-submit-app-upload-images"
                    name="af-submit-app-upload-images"
                    type="file"
                    className="sr-only"
                  />
                  <svg
                    className="size-10 mx-auto text-gray-400 dark:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                  <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                    Browse your device or{" "}
                    <span className="group-hover:text-blue-700 text-blue-600">
                      drag 'n drop'
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    Maximum file size is 2 MB
                  </span>
                </label>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-category"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Category
                </label>
                <select
                  id="af-submit-app-category"
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                >
                  <option selected="">Select a category</option>
                  <option>Ecommerce</option>
                  <option>Finance</option>
                  <option>Marketplace</option>
                  <option>Social</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Description
                </label>
                <textarea
                  id="af-submit-app-description"
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  rows={6}
                  placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-5 flex justify-center gap-x-2">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit your project
              </button>
            </div>
          </div>
        </div>
        {/* End Card */}
      </form>
    </div>
    {/* End Card Section */}
  
  </div>
  )
}

export default Form;