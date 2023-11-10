import { addDoc, collection } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { db } from '../Config/Firebase';

function Mudal({mudal , setMudal}) {
    const addCont = async (cont)  => {
        try {
            const contRef = collection(db , 'contacts');
        await addDoc(contRef , cont)
        setMudal(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        mudal ? "" : "hidden"
      }`}
    >
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => setMudal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8  w-96">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Add New Contact
            </h3>
            <Formik initialValues={{
                name : '', 
                email : '',
            }}
            onSubmit={(values) => {
                addCont(values)
            }}>
                <Form className='flex flex-col space-y-3 text-white'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name</label>
                        <Field name='name' className=' py-1 px-1 bg-transparent border-b border-white outline-none'/>
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <Field name='email' className='py-1 px-1 bg-transparent border-b border-white outline-none'/>
                    </div>
                    <button type='submit' className=' bg-blue-500 px-3 py-1.5 text-white rounded-md'>Add New Contact</button>
                </Form>
            </Formik>
            {/* <Formik
              initialValues={{
                      name: "",
                      email: "",
                    }
              }
              onSubmit={(values) => {
                addContact(values);
              }}
            >
              <Form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <Field
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <Field
                    name="name"
                    placeholder="Zaheer Ahmad"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add New Contact
                </button>
              </Form>
            </Formik> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mudal