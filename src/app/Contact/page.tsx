import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info Section */}
        <div className="my-10 md:w-[30%] w-full flex flex-col gap-6 p-6 shadow-lg border rounded-lg hover:scale-105 transition-transform duration-300 bg-white">
          {/* Call To Us */}
          <div>
            <div className="flex gap-3 items-center">
              <Image
                src="/images/icons-phone.png"
                alt="Phone Icon"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-semibold">Call To Us</h1>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm text-gray-800 font-medium">
                Phone: +8801611112222
              </p>
            </div>
          </div>

          {/* Write To Us */}
          <div>
            <div className="flex gap-3 items-center">
              <Image
                src="/images/icons-mail.png"
                alt="Mail Icon"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-semibold">Write To Us</h1>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm text-gray-800 font-medium">
                Email: customer@exclusive.com
              </p>
              <p className="text-sm text-gray-800 font-medium">
                Email: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="my-10 md:w-[60%] w-full flex flex-col gap-6 p-6 shadow-lg border rounded-lg hover:scale-105 transition-transform duration-300 bg-white">
          {/* Input Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="rounded-md p-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="rounded-md p-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="rounded-md p-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="Your Message *"
              className="rounded-md p-3 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none w-full h-40 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="text-black bg-gray-200 w-full md:w-[200px] border-0 py-3 px-6 focus:outline-none hover:bg-gray-600 hover:text-white mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
