"use client";

import { useState } from "react";
import Image from "next/image";

const PropertyGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div>
      <div className="relative aspect-16/9 overflow-hidden rounded-2xl bg-brand-50 sm:aspect-2/1 lg:aspect-21/9">
        <Image
          src={activeImage}
          alt={`${title} — photo ${activeIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-7">
        {images.map((image, index) => (
          <button
            key={image + index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1} of ${title}`}
            aria-pressed={activeIndex === index}
            className={`relative aspect-square overflow-hidden rounded-lg transition ${
              activeIndex === index
                ? "ring-2 ring-brand-600 ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
