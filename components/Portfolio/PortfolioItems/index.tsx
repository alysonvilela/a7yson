import React from 'react';
import Image from 'next/image';

export type PortfolioThumbnailParams = {
  id?: string | number;
  title: string;
  description: string;
  principalPhoto: string;
  secondaryPhoto?: string;
  terciaryPhoto?: string;
};

export default function PortfolioItems({
  title,
  description,
  principalPhoto,
  secondaryPhoto,
  terciaryPhoto,
}: PortfolioThumbnailParams) {
  return (
    <>
      <div className="business-1 pb-3 pb-md-5">
        <div className="text-part text-center w-75 mx-auto">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="pics">
          <div className="large-pic">
            <Image
              src={principalPhoto}
              blurDataURL={principalPhoto}
              width={2000}
              height={1200}
              objectFit="cover"
              alt={`Preview of ${title} project.`}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          {secondaryPhoto && terciaryPhoto && (
            <div className="medium-pic d-flex py-3">
              <div className="medium-pic col pe-3">
                <Image
                  src={secondaryPhoto}
                  blurDataURL={secondaryPhoto}
                  width={2000}
                  height={1200}
                  objectFit="cover"
                  alt={`Micro preview of ${title} project.`}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className="medium-pic col">
                <Image
                  src={terciaryPhoto}
                  blurDataURL={terciaryPhoto}
                  width={2000}
                  height={1200}
                  objectFit="cover"
                  alt={`Micro preview of ${title} project.`}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
