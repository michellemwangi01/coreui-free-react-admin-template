import '../../../Customcss.css'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAtomValue, useSetAtom } from 'jotai'
import { isLoggedInAtom, loggedInUserAtom } from '../../../atoms'
import { atom } from 'jotai'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const [customError, setCustomError] = useState('')
  const navigate = useNavigate()

  // isLoggedIn will always be up to date with what is in 'isLoggedInAtom'
  const isLoggedIn = useAtomValue(isLoggedInAtom)
  const loggedInUser = useAtomValue(loggedInUserAtom)

  // the usesetAtom is a function that will allow updating the value of the Atom
  const setLoggedInUser = useSetAtom(loggedInUserAtom)
  const setisLoggedInAtom = useSetAtom(isLoggedInAtom)

  const onSubmit = (data) => {
    // Reset custom error
    setCustomError('')

    // Handle login logic here
    if (isLogin) {
      console.log('Login Data: ', data)

      setisLoggedInAtom(true)
      setIsLogin(isLoggedIn)
      setLoggedInUser(data)
      navigate('/profile')
    } else {
      console.log('Signup Data: ', data)
      if (data.password !== data.confirmPassword) {
        setCustomError('Passwords do not match. Please try again!')
        return
      } else {
        // setCustomError("Passwords do not match. Please try again!");
      }
      // Handle signup logic here, then redirect to login
      setIsLogin(true)
      navigate('/login')
    }
    reset()
  }

  useEffect(() => {
    console.log(isLoggedIn)
    console.log(isLogin)
  }, [isLoggedIn])

  return (
    <section
      className="parallax w-full h-screen bg-cover bg-center p-0 m-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex justify-center items-center h-full text-center">
        <div className="flex m-auto justify-center items-center bg-white dark:bg-gray-950 p-8 rounded-lg shadow-lg xl:w-1/2 w-3/4 opacity-90">
          <div className="hidden md:flex flex-wrap items-center justify-center h-full w-1/2 text-center">
            <p className="text-4xl my-8 mx-4 uppercase">
              <span className="text-blue-800">Castle</span> Developer's Portal
            </p>
            <p className="text-lg m-4">
              Empowering Healthcare Innovation! <br /> We are committed to fostering the future of
              healthcare technology by providing seamless access to national health registries.
            </p>
          </div>
          <div className="lg:w-1/2 w-full lg:py-8 lg:px-8 py-4 px-2 m-4">
            <h1 className="text-3xl tracking-wider text-gray-800 uppercase dark:text-white">
              {isLogin ? <>Login to your Account</> : 'Create A new Account'}
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-2 mt-8 text-left"
            >
              {isLogin ? (
                <>
                  <div>
                    <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">Username is required</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register('password', { required: true })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">Password is required</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('firstName', { required: true })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">First Name is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Snow"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('lastName', { required: true })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">Last Name is required</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="johnsnow@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('email', { required: true })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">Email Address is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="XXX-XXXX-XXX"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('phoneNumber', { required: true })}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">Phone Number is required</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('password', { required: true })}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm">Password is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 text-md text-gray-600 dark:text-gray-200">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register('confirmPassword', { required: true })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">Confirmation Password is required</p>
                      )}
                    </div>
                  </div>
                </>
              )}
              {customError && <p className="text-red-500 text-sm w-full">{customError}</p>}

              <button className="flex items-center justify-between w-full px-6 py-3 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>{isLogin ? 'Login' : 'Sign Up'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create one' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
