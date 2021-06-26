const navDotsRef = document.querySelector('.timeline-points-list');

const slider = tns({
  container: '.splide__list',
  mode: 'carousel',
  items: 2,
  gutter: 66,
  fixedWidth: 630,
  viewportMax: 1920,
  speed: 500,
  slideBy: 1,
  center: true,
  controls: false,
  navPosition: 'bottom',
  navContainer: navDotsRef,
  navAsThumbnails: true,
  arrowKeys: true,
});
