import React from 'react'
import { Link } from "react-router-dom";
import App from "../App";
import { Navbar } from 'flowbite-react';
import { useState } from 'react';

function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h1 class="text-center">Astro Club KU</h1>
      <div class="hidden w-full md:block" id="navbar-default">
        <ul class="font-medium flex justify-around flex-col space-x-4 p-9 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-brown dark:border-gray-700">
          <li>
            <Link
              to="/"
              class="block text-2xl py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-black md:dark:text-orange-500 md:dark:hover:text-blue-500" aria-current="page"
            >Home
            </Link>
          </li>
          <li>

            <Link
              to="/news"
              class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-red-700 dark:hover:text-black md:dark:hover:bg-transparent"
            >News
            </Link>
          </li>
          <li>
            <a href="#" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Podcast</a>
          </li>

          <li>
            <button id="dropdownNavbarLink" onClick={() => setIsOpen((prev) => !prev)} data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">User <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>
            {/* <!-- Dropdown menu --> */}
            {isOpen && (
              <div id="dropdownNavbar" class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/login"
                      class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup"
                      class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Sign Up
                    </Link>
                  </li>

                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            )}
          </li>

        </ul>

      </div>
      <div class="grid gap-4" className="image-section">
        {/* Embedding Instagram post using iframe */}
        <div class=" mx-auto m-15">
          <iframe class="w-full"
            src="https://www.instagram.com/p/C1mSEoFJcsf/embed/"
            title="Instagram Post"
            scrolling="no"
            height="2000"
            width="700"
            allowfullscreen
          ></iframe>
        </div>

      </div>





    </div>
  )
}

export default Home