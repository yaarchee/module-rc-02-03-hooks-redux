import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { SRLWrapper } from 'simple-react-lightbox';
import React, { useState, useEffect } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function ImageGallery({ images }) {
  return (
    <SRLWrapper>
      <ul className="ImageGallery">
        {images.map((image, index) => {
          return (
            <ImageGalleryItem
              id={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              key={index}
            />
          );
        })}
      </ul>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </SRLWrapper>
  );
}
