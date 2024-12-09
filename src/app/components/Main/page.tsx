import { Check, CreditCard, Sprout, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Ensure Link is imported from next/link
import React from "react";
import { products } from "../utils/products";
import Card from "../mini/Card";
import Heading from "../mini/heading";
import Btn from "../mini/btn";

const Main = () => {
  return (
    <div>
      {/* ==================================1st Section============================ */}
      <div className="w-full md:p-20 m-auto items-center">
        <div className="md:flex">
          <div className="bg-[#2A254B] md:w-[55%] p-10">
            <div>
              <h1 className="text-white text-4xl">
                The furniture brand for the <br /> future, with timeless designs
              </h1>
              <button className="hidden md:block bg-white md:my-20 bg-opacity-10 focus:bg-transparent focus:ring-2 focus:border-gray-300 text-base text-white py-4 px-5 transition-colors duration-200 ease-in-out">
                View collection
              </button>
            </div>
            <div>
              <p className="text-gray-200 my-10 md:my-2">
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
            <button className="bg-white w-full md:hidden bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:ring-2 focus:ring-gray-300 text-base text-white py-3 px-5 mt-6 md:mt-20 transition-colors duration-200 ease-in-out">
              View collection
            </button>
          </div>

          <div className="hidden md:block w-[40%]">
            <Image
              src="/images/righthome.png"
              alt="Right Home"
              width={1280}
              height={548}
              className="w-[1280px] h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* ==================================2nd Section============================ */}
      <div>
        <div className="text-gray-600 body-font">
          <div className="container py-24 mx-auto w-[90%]">
            <div className="flex flex-wrap md:text-left text-center order-first">
              {/* Feature 1 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 tracking-widest text-lg mb-3">
                  <Truck className="m-auto" /> <br />
                  Next day as standard
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black">
                      Order before 3pm and get your order the next day as
                      standard
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 2 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 tracking-widest text-lg mb-3">
                  <Check className="m-auto" /> <br />
                  Made by true artisans
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black">
                      Handmade crafted goods made with real passion and
                      craftsmanship
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 3 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 tracking-widest text-lg mb-3">
                  <CreditCard className="m-auto" /> <br />
                  Unbeatable prices
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black">
                      For our materials and quality you wont find better prices
                      anywhere
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Feature 4 */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 tracking-widest text-lg mb-3">
                  <Sprout className="m-auto" /> <br />
                  Recycled packaging
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black">
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

      {/* ==================================Cards Section============================ */}
      <Heading name="New ceramics" />
      <div className="flex flex-wrap justify-center gap-4">
      {products.map((item) =>{
        if(item.type === "top"){
          return (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
          );
        }
        return null
        })}
    </div>
      <Btn name="View collection" />

      {/* ==================================Our Popular Products============================ */}
      <div className="my-10">
        <Heading name="Our popular products" />
        <div className="flex flex-wrap justify-center gap-4">
      {products.map((item) =>{
        if(item.type === "mid"){
          return (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
          );
        }
        return null
        })}
    </div>
        <Btn name="View collection" />
      </div>

      {/* ==================================Join the Club============================ */}
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

      {/* ==================================Get in Touch============================ */}
      <div className="w-full">
        <div className="flex md:flex-row flex-col m-auto justify-center items-center">
          <div className="md:w-[50%] md:p-10 ">
            <div>
              <h1 className="text-4xl py-8">
                From a studio in London to a global brand with <br />
                over 400 outlets
              </h1>
            </div>
            <div>
              <p>
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market. <br />
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique becomes the
                hotbed for the London interior design community.
              </p>
            </div>
            <div>
              <button className="text-black bg-gray-200 w-full md:w-[200px] border-0 py-3 px-8 focus:outline-none hover:bg-gray-600 hover:text-white my-2 md:mt-20">
                Get in touch
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Image
              src="/images/sofa.png"
              alt="Sofa"
              width={500}
              height={700}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* ==================================Hero Image for Desktop============================ */}
      <div className="hidden md:block w-full">
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={500}
          height={700}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* ==================================Hero Section for Mobile============================ */}
      <div className="md:hidden w-full">
        <div>
          <h1 className="text-4xl py-8">
            Luxury homeware for people who love timeless design quality
          </h1>
        </div>
        <div>
          <p>
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
        </div>
        <div>
          <button className="text-black bg-gray-200 w-full md:w-[200px] border-0 py-3 px-8 focus:outline-none hover:bg-gray-600 hover:text-white my-2 md:mt-20">
            View collection
          </button>
        </div>
      </div>

      <div className="md:hidden w-full">
        <Image
          src="/images/hero2.png"
          alt="Hero 2"
          width={500}
          height={700}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* ==================================7th Section============================ */}
      <div>
        <div className="text-gray-600 body-font">
          <div className="container py-24 w-[90%] m-auto">
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
      {/* ==================================Cards Section============================ */}
      <Heading name="New ceramics" />
      <div className="flex flex-wrap justify-center gap-4">
      {products.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
      <Btn name="View collection" />

      {/* ==================================9th Section============================ */}
      <div className="w-full p-10">
        <div className="md:flex w-full">
          <div className="bg-[#2A254B] md:w-[50%] p-10">
            <div>
              <h1 className="text-white text-4xl">
                The furniture brand for the <br /> future, with timeless designs
              </h1>
              <button className="hidden md:block bg-white md:my-20 bg-opacity-10 focus:bg-transparent focus:ring-2 focus:border-gray-300 text-base text-white py-4 px-5 transition-colors duration-200 ease-in-out">
                View collection
              </button>
            </div>
            <div>
              <p className="text-gray-200 my-10 md:my-2">
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
            <button className="bg-white w-full md:hidden bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-20 focus:ring-2 focus:ring-gray-300 text-base text-white py-3 px-5 mt-6 md:mt-20 transition-colors duration-200 ease-in-out">
              View collection
            </button>
          </div>
        <div className=" md:w-[50%]">
          <Image
            src="/images/sofa2.png"
            alt="Sofa"
            width={1280}
            height={548}
            className="w-[1280px] h-[500px]"
          />
        </div>
        </div>
      </div>

      {/* ==================================10th Section============================ */}

      <div className="hidden md:block w-full">
        <Image
          src="/images/email1.png"
          alt="Sofa"
          width={1280}
          height={548}
          className="w-[1280px] h-[500px]"
        />


</div>


    </div>
  );
};

export default Main;
