import React, { useState, useEffect, useRef } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import makeFetch from '../services/makeFetch';
import { onEntry, lazyLoadImg, options } from '../services/infinityScroll';
import useInfiniteScroll from 'react-infinite-scroll-hook';

// import IO from "../../services/infinityScroll";

import SimpleReactLightbox from 'simple-react-lightbox';

export default function ImageFinder() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [pageQuery, setPageQuery] = useState(1);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchImages();
    return () => {
      console.log('дисконект');
      infinityScroll.current.disconnect();
    };
  }, [searchQuery, pageQuery]);

  const infinityScroll = useRef(
    new IntersectionObserver((e, o) => onEntry(e, o, setPageQuery), options)
  );

  const fetchImages = () => {
    if (total === images.length) {
      console.log('дисконект');
      infinityScroll.current.disconnect();
      return;
    }
    makeFetch
      .crateFetchFind(searchQuery, pageQuery)
      .then(({ hits, totalHits }) => {
        setImages((prevState) => [...prevState, ...hits]);

        setTotal(totalHits);
        console.log(totalHits);
        lazyLoadImg(infinityScroll.current);
      });
  };

  const handlerSearchQuery = (query) => {
    setImages([]);
    setPageQuery(1);
    setSearchQuery(query);
    infinityScroll.current.disconnect();
  };

  return (
    <>
      <SimpleReactLightbox>
        <Searchbar onSubmit={handlerSearchQuery} />
        {images.length > 0 && <ImageGallery images={images} />}
      </SimpleReactLightbox>
    </>
  );
}
// export default function ImageFinder() {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [pageQuery, setPageQuery] = useState(1);
//
//   useEffect(() => {
//     if (!setSearchQuery) {
//       return;
//     }
//     fetchImages();
//   }, [pageQuery]);
//
//   const options = {
//     rootMargin: '50px',
//   };
//   const onEntry = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log('зашли onEntry');
//         observer.unobserve(entry.target);
//         fetchImages();
//       }
//     });
//   };
//
//   const infinityScroll = new IntersectionObserver(onEntry, options);
//
//   const lazyLoadImg = () => {
//     console.log('зашли lazyLoadImg');
//     const imageListItem = document.querySelectorAll('.ImageGalleryItem');
//     infinityScroll.observe(imageListItem[imageListItem.length - 1]);
//   };
//
//   const fetchImages = () => {
//     makeFetch.crateFetchFind(searchQuery, pageQuery).then((data) => {
//       setImages((prevState) => [...prevState, ...data]);
//       setPageQuery((prevState) => prevState + 1);
//
//       lazyLoadImg();
//     });
//   };
//
//   const handlerSearchQuery = (query) => {
//     setImages([]);
//     setPageQuery(1);
//     setSearchQuery(query);
//   };
//
//   return (
//       <>
//         <SimpleReactLightbox>
//           <Searchbar onSubmt={handlerSearchQuery} />
//           {images.length > 0 && <ImageGallery images={images} />}
//         </SimpleReactLightbox>
//       </>
//   );
// }

// export default function ImageFinder() {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(null);
//   const [pageQuery, setPageQuery] = useState(1);
//   const [total, setTotal] = useState(null);
//
//   useEffect(() => {
//     if (!searchQuery) {
//       return;
//     }
//
//     fetchImages();
//   }, [searchQuery]);
//
//   const infinityScroll = new IntersectionObserver(
//       (e, o) => onEntry(e, o, fetchImages),
//       options
//   );
//   function fetchImages() {
//     if (total <= images.length - 1) {
//       console.log('дисконект?');
//       infinityScroll.disconnect();
//       return;
//     }
//     makeFetch
//         .crateFetchFind(searchQuery, pageQuery)
//         .then(({ hits, totalHits }) => {
//           setImages((prevState) => [...prevState, ...hits]);
//           setPageQuery((prevState) => prevState + 1);
//           setTotal(totalHits);
//           lazyLoadImg(infinityScroll);
//         });
//   }
//
//   const handlerSearchQuery = (query) => {
//     setImages([]);
//     setPageQuery(1);
//     setSearchQuery(query);
//     infinityScroll.disconnect();
//   };
//
//   return (
//       <>
//         <SimpleReactLightbox>
//           <Searchbar onSubmt={handlerSearchQuery} />
//           {images.length > 0 && <ImageGallery images={images} />}
//         </SimpleReactLightbox>
//       </>
//   );
// }
