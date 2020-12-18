const options = {
  rootMargin: '50px',
};
const onEntry = (entries, observer, setPage) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('зашли onEntry');
      observer.unobserve(entry.target);
      setPage((prev) => prev + 1);
    }
  });
};

const lazyLoadImg = (infinityScroll) => {
  console.log('зашли lazyLoadImg');
  const imageListItem = document.querySelectorAll('.ImageGalleryItem');
  infinityScroll.observe(imageListItem[imageListItem.length - 1]);
};

export { onEntry, lazyLoadImg, options };
