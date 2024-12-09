// components/Card.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Icards {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Card = (props: Icards) => {
  return (
    <Link href={`/components/dinamic/${props.id}`}>
      <div className="flex flex-col gap-4 w-[270px] h-[450px] p-4 shadow-lg hover:scale-105 transition-transform duration-300">
        {/* Image Rendering */}
        <div>
          <Image
            src={props.image}
            alt={props.name}
            width={500}
            height={700}
            className="w-full h-[300px] object-cover rounded"
          />
        </div>
        {/* Product Name */}
        <p className="font-semibold text-lg">{props.name}</p>
        {/* Prices */}
        <div className="flex justify-between items-center">
          <p className="font-bold">£{props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
