import { Check, CreditCard, Sprout, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import React from "react";
import { products } from "../utils/products";
import Card from "../mini/Card";
import Heading from "../mini/heading";
import Btn from "../mini/btn";

const Main = () => {
  return (
    <div>
      {/* ==================================1st Section============================ */}
      <div className="w-full md:p-20 mx-auto items-center">
        <div className="md:flex">
          {/* Text Section */}
          <div className="bg-[#2A254B] md:w-[55%] p-10">
            <div>
              <h1 className="text-white text-4xl">
                The furniture brand for the <br /> future, with timeless designs
              </h1>
              <button className="hidden md:block bg-white md:my-20 bg-opacity-10 focus:ring-2 focus:ring-gray-300 text-base text-white py-4 px-5 transition-colors duration-200 ease-in-out">
                View collection
              </button>
            </div>
            <div>
              <p className="text-gray-200 my-10 md:my-2">
                A new era in eco-friendly furniture with Avelon, the French
                luxury retail brand with beautiful fonts, tasteful colors, and a
                stunning way to display products using modern web technologies.
              </p>
            </div>
            <button className="bg-white w-full md:hidden bg-opacity-10 hover:bg-opacity-20 focus:ring-2 focus:ring-gray-300 text-base text-white py-3 px-5 mt-6 transition-colors duration-200 ease-in-out">
              View collection
            </button>
          </div>

          {/* Image Section */}
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
      <div className="text-gray-600 body-font">
        <div className="container py-24 mx-auto w-[90%]">
          <div className="flex flex-wrap md:text-left text-center">
            {/* Feature Cards */}
            {[
              {
                Icon: Truck,
                title: "Next day as standard",
                description:
                  "Order before 3pm and get your order the next day as standard.",
              },
              {
                Icon: Check,
                title: "Made by true artisans",
                description:
                  "Handmade goods crafted with passion and craftsmanship.",
              },
              {
                Icon: CreditCard,
                title: "Unbeatable prices",
                description:
                  "High-quality materials at prices you won’t find elsewhere.",
              },
              {
                Icon: Sprout,
                title: "Recycled packaging",
                description:
                  "100% recycled packaging for a sustainable future.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <div key={idx} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-600 tracking-widest text-lg mb-3">
                  <Icon className="m-auto" /> <br />
                  {title}
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black">
                      {description}
                    </Link>
                  </li>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================================Cards Section============================ */}
      <Heading name="New ceramics" />
      <div className="flex flex-wrap justify-center gap-4">
        {products
          .filter((item) => item.type === "top")
          .map((item) => (
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

      {/* ==================================Our Popular Products============================ */}
      <div className="my-10">
        <Heading name="Our popular products" />
        <div className="flex flex-wrap justify-center gap-4">
          {products
            .filter((item) => item.type === "mid")
            .map((item) => (
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
      </div>

      {/* ==================================Get in Touch============================ */}
      <div className="w-full">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-[50%] md:p-10">
            <h1 className="text-4xl py-8">
              From a studio in London to a global brand with <br />
              over 400 outlets
            </h1>
            <p>
              When we started Avion, the idea was simple: make high-quality
              furniture affordable and available for everyone. Handmade and
              lovingly crafted furniture and homeware are our passion.
            </p>
            <button className="text-black bg-gray-200 w-full md:w-[200px] py-3 px-8 focus:outline-none hover:bg-gray-600 hover:text-white mt-6">
              Get in touch
            </button>
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

      {/* ==================================Hero Images and Text============================ */}
      <div className="hidden md:block w-full">
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={1280}
          height={548}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="md:hidden w-full">
        <h1 className="text-4xl py-8">
          Luxury homeware for people who love timeless design and quality
        </h1>
        <p>
          Explore our new collection featuring over 400 bespoke pieces, from
          homeware to furniture.
        </p>
        <button className="text-black bg-gray-200 w-full py-3 px-8 hover:bg-gray-600 hover:text-white mt-4">
          View collection
        </button>
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

      <div className="hidden md:block w-full">
        <Image
          src="/images/email1.png"
          alt="Email Banner"
          width={1280}
          height={548}
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Main;
