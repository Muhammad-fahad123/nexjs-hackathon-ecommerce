'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { products } from '@/app/components/utils/products';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // Add other relevant fields
}

const Page = () => {
  const params = useParams();
  const { id } = params; // Extract the id from params

  // Find the product matching the id
  const product: Product | undefined = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <div className="container mx-auto p-4">Product not found!</div>;
  }

  return (
    <div className="container w-[90%] mx-auto p-4">
      {/* Render the details of the product */}
      <div className="flex flex-col md:flex-row gap-4 my-20">
        {/* Image Section */}
        <div className="w-full md:w-[450px] h-[450px] p-4 flex justify-center items-center border rounded-lg shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-evenly w-full md:w-[50%] mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <div className="flex justify-between items-center mt-2">
            <span className="text-green-500 font-bold text-2xl">${product.price}</span>
          </div>

          {/* Description */}
          <div className="mt-2">
            <h2 className="text-xl font-semibold text-gray-700">Description</h2>
            <p className="mt-2 text-gray-700">
              {/* You can replace this with product.description if available */}
              Here you can add a detailed description of the product. For example, specifications, features, and benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
