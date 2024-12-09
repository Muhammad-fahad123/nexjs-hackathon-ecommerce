import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-[#2A254B]">
        <div className="container py-24 mx-auto w-[90%]">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Menu Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/new-arrivals" className="text-white hover:text-gray-300">
                    New arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/best-sellers" className="text-white hover:text-gray-300">
                    Best sellers
                  </Link>
                </li>
                <li>
                  <Link href="/recently-viewed" className="text-white hover:text-gray-300">
                    Recently viewed
                  </Link>
                </li>
                <li>
                  <Link href="/popular-this-week" className="text-white hover:text-gray-300">
                    Popular this week
                  </Link>
                </li>
                <li>
                  <Link href="/all-products" className="text-white hover:text-gray-300">
                    All products
                  </Link>
                </li>
              </nav>
            </div>

            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Categories
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/crockery" className="text-white hover:text-gray-300">
                    Crockery
                  </Link>
                </li>
                <li>
                  <Link href="/furniture" className="text-white hover:text-gray-300">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/home-ware" className="text-white hover:text-gray-300">
                    Home ware
                  </Link>
                </li>
                <li>
                  <Link href="/plant-pots" className="text-white hover:text-gray-300">
                    Plant pots
                  </Link>
                </li>
                <li>
                  <Link href="/chairs" className="text-white hover:text-gray-300">
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link href="/crockery" className="text-white hover:text-gray-300">
                    Crockery
                  </Link>
                </li>
              </nav>
            </div>

            {/* Our Company Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Our Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/about-us" className="text-white hover:text-gray-300">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/vacancies" className="text-white hover:text-gray-300">
                    Vacancies
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white hover:text-gray-300">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white hover:text-gray-300">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/return-policy" className="text-white hover:text-gray-300">
                    Return policy
                  </Link>
                </li>
              </nav>
            </div>

            {/* Mailing List Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Join our mailing list
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:justify-start">
                <input
                  type="email"
                  placeholder="your@email.com"
                  id="footer-field"
                  name="footer-field"
                  className="flex-grow bg-white bg-opacity-10 focus:bg-transparent focus:ring-2 focus:border-gray-300 text-base text-white py-2 px-3 mr-2 mb-2 sm:mb-0 transition-colors duration-200 ease-in-out"
                />
                <button
                  className="my-4 md:my-0 flex-shrink-0 text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300"
                  type="button"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="h-2 border-b border-[#5b50a2]"></div>
        </div>

        <div className="bg-[#2A254B] w-[90%] m-auto">
          <div className="container py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-200 sm:ml-6 sm:mt-0 md:mt-4">
              Copyright 2022 Avion LTD
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Twitter Icon */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
