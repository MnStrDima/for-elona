const scrollHelperRef = document.querySelector('#scroll-helper');
const listToShow = document.querySelectorAll('.achievement');

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      listToShow.forEach((el, index) => setTimeout(() => el.classList.add('visible'), 50 * index));
    }
    if (!entry.isIntersecting) {
      [...listToShow]
        .reverse()
        .forEach((el, index) => setTimeout(() => el.classList.remove('visible'), 50 * index));
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '400px',
});
observer.observe(scrollHelperRef);
