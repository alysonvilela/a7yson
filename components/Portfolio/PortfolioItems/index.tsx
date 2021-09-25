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
              width={2000}
              height={1200}
              objectFit="contain"
              alt="ESM Principal Project"
            />
          </div>
          {secondaryPhoto && terciaryPhoto && (
            <div className="medium-pic d-flex py-3">
              <div className="medium-pic col pe-3">
                <Image
                  src={secondaryPhoto}
                  width={2000}
                  height={1200}
                  objectFit="contain"
                  alt="ESM Principal Project"
                />
              </div>
              <div className="medium-pic col">
                <Image
                  src={terciaryPhoto}
                  width={2000}
                  height={1200}
                  objectFit="contain"
                  alt="ESM Principal Project"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
