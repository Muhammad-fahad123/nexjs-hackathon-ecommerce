import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image';
import { Check, CreditCard, Sprout, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="main">
      
      {/* ====================================1st Section============================= */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-between md:px-20 px-4 gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            A brand built on the love of craftsmanship, <br className="hidden md:block" />
            quality, and outstanding customer service
          </h1>
        </div>
        <div>
          <Link
            href="#"
            className="inline-block bg-gray-200 text-black py-3 px-6 md:py-4 md:px-8 hover:bg-gray-600 hover:text-white rounded transition-colors duration-200"
          >
            View our products
          </Link>
        </div>
      </div>

      {/* ====================================2nd Section============================= */}
      <div className="flex flex-col md:flex-row my-10 items-center justify-between gap-2 p-6 md:p-10 w-full">
        
        {/* Left Side: Text Content */}
        <div className="bg-[#2A254B] p-10 w-full h-[400px] md:w-1/2 ">
          <div>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
              It started with a small idea
            </h1>
            <Link
              href="#"
              className="hidden md:inline-block bg-white md:my-10 bg-opacity-10 focus:bg-transparent focus:ring-2 focus:ring-gray-300 text-base text-white py-3 px-6 md:px-8 mt-6 transition-colors duration-200 ease-in-out"
            >
              View collection
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-gray-200 text-sm md:text-base mb-10">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014.
            </p>
          </div>
          <Link
            href="#"
            className="md:hidden my-10 bg-white w-full bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:ring-2 focus:ring-gray-300 text-base text-white py-3 px-5 mt-6 transition-colors duration-200 ease-in-out"
          >
            View collection
          </Link>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/images/sofa2.png"
            alt="About Us"
            width={500}
            height={700}
            className="w-full h-[400px] max-w-md md:max-w-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* ========================================sofa 3 =================================== */}

      <div className="w-full">
        <div className="flex md:flex-row flex-col m-auto justify-center items-center">
 
          <div className="w-full md:w-[50%]">
            <Image
              src="/images/sofa3.png"
              alt="Sofa"
              width={500}
              height={700}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="md:w-[50%] md:p-10">
            <div>
              <h1 className="text-4xl py-8">
              Our service isnt just personal, its actually
              hyper personally exquisite
              </h1>
            </div>
            <div>
              <p>
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
              <br />
               Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            </div>
            <div>
              <button className="text-black bg-gray-200 w-full md:w-[200px] border-0 py-3 px-8 focus:outline-none hover:bg-gray-600 hover:text-white my-2 md:mt-20">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>

{/* ===============================================gray Cards================================ */}

<div>
        <div className="text-gray-600 body-font">
          <div className="container py-24 w-[90%] m-auto ">
            <div className="flex flex-wrap md:text-left text-center justify-center items-center order-first gap-5">
              {/* Feature 1 */}
              <div className="w-[250px] px-4 bg-gray-200  text-gray-600 hover:bg-gray-400 hover:text-white">
                <h2 className="title-font font-medium tracking-widest text-lg my-3 m-auto">
                  <Truck className="m-auto" /> <br />
                  Next day as standard
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#">
                      Order before 3pm and get your order the next day as
                      standard
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 2 */}
              <div className="w-[250px] px-4 bg-gray-200  text-gray-600 hover:bg-gray-400 hover:text-white">
                <h2 className="title-font font-medium tracking-widest text-lg my-3 m-auto">
                  <Check className="m-auto" /> <br />
                  Made by true artisans
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#">
                      Handmade crafted goods made with real passion and
                      craftsmanship
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 3 */}
              <div className="w-[250px] px-4 bg-gray-200  text-gray-600 hover:bg-gray-400 hover:text-white">
                <h2 className="title-font font-medium tracking-widest text-lg my-3 m-auto">
                  <CreditCard className="m-auto" /> <br />
                  Unbeatable prices
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#">
                      For our materials and quality you wont find better prices
                      anywhere
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 4 */}
              <div className="w-[250px] px-4 bg-gray-200  text-gray-600 hover:bg-gray-400 hover:text-white">
                <h2 className="title-font font-medium tracking-widest text-lg my-3 m-auto">
                  <Sprout className="m-auto" /> <br />
                  Recycled packaging
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#">
                      We use 100% recycled packaging to ensure our footprint is
                      manageable
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* ===============================email form=============================== */}
<div className="h-[400px] w-full bg-[#F9F9F9]">
        <div className="h-[364px] flex flex-col m-auto justify-center items-center">
          <h1 className="text-4xl font-semibold py-8">
            Join the club and get the benefits
          </h1>
          <p className="py-4">
            Sign up for our newsletter and receive exclusive offers on new{" "}
          </p>
          <p>ranges, sales, pop up stores and more</p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-start my-10">
            <input
              type="email"
              placeholder="your@email.com"
              id="footer-field"
              name="footer-field"
              className="flex-grow w-[300px] bg-[#c3c0c0] bg-opacity-10 focus:bg-transparent focus:ring-2 focus:border-gray-300 text-base text-white py-2 px-3 mr-2 mb-2 sm:mb-0 transition-colors duration-200 ease-in-out"
            />
            <button
              className="flex-shrink-0 text-white bg-[#2A254B] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300"
              type="button"
            >
              Signup
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
