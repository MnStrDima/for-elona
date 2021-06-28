const navDotsRef = document.querySelector('.timeline-points-list');

const slider = tns({
  container: '.splide__list',
  mode: 'carousel',
  items: 3,
  gutter: 69,
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

let info = slider.getInfo(),
  indexCurrent = info.index;
info.slideItems[indexCurrent].classList.add('current-slide');

const splideRef = document.querySelector('.splide');

function throttle(fn, interval) {
  let lastTime;
  return function throttled() {
    let timeSinceLastExecution = Date.now() - lastTime;
    if (!lastTime || timeSinceLastExecution >= interval) {
      fn.apply(this, arguments);
      lastTime = Date.now();
    }
  };
}

function onWheelScroll(elem, onWheel) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      elem.addEventListener('wheel', onWheel);
    } else if ('onmousewheel' in document) {
      elem.addEventListener('mousewheel', onWheel);
    } else {
      elem.addEventListener('MozMousePixelScroll', onWheel);
    }
  } else {
    elem.attachEvent('onmousewheel', onWheel);
  }
}

function onWheel(e) {
  e = e || window.event;
  let info = slider.getInfo();
  maxIndex = info.slideCount;
  indexCurrent = info.index;
  let prevIndex;
  let targetIndex;
  let nextIndex;
  let delta = e.deltaY || e.detail || e.wheelDelta;
  if (delta > 0) {
    prevIndex = indexCurrent <= maxIndex + 5 ? indexCurrent : 6;
    targetIndex = prevIndex + 1;
    nextIndex = targetIndex + 1;
    info.slideItems[prevIndex].classList.remove('current-slide');
    info.slideItems[targetIndex].classList.add('current-slide');
    info.slideItems[nextIndex].classList.remove('current-slide');
    slider.goTo('next');
  } else {
    prevIndex = indexCurrent;
    targetIndex = prevIndex - 1 < 1 ? maxIndex : prevIndex - 1;
    nextIndex = targetIndex - 1 < 1 ? maxIndex : targetIndex - 1;
    info.slideItems[prevIndex].classList.remove('current-slide');
    info.slideItems[targetIndex].classList.add('current-slide');
    info.slideItems[nextIndex].classList.remove('current-slide');
    slider.goTo('prev');
  }
  e.preventDefault();
}

onWheelScroll(splideRef, throttle(onWheel, 300));

const timelinePointsRef = document.querySelectorAll('.timeline-point');

[...timelinePointsRef].forEach(el => el.addEventListener('click', pointClickHandler));

function pointClickHandler(e) {
  let navIndex = Number(e.currentTarget.dataset.nav);
  slider.goTo(navIndex);
  let info = slider.getInfo();
  indexCurrent = info.index;

  info.slideItems[indexCurrent - 1].classList.remove('current-slide');
  info.slideItems[indexCurrent].classList.add('current-slide');
  info.slideItems[indexCurrent + 1].classList.remove('current-slide');
}

document.addEventListener('keydown', onArrowsClick);

function onArrowsClick(e) {
  let info = slider.getInfo();
  maxIndex = info.slideCount;
  indexCurrent = info.index;
  let prevIndex;
  let targetIndex;
  let nextIndex;
  if (e.key === 'ArrowRight') {
    prevIndex = indexCurrent - 1;
    targetIndex = indexCurrent <= maxIndex + 6 ? indexCurrent : 7;
    nextIndex = indexCurrent + 1;
    info.slideItems[prevIndex].classList.remove('current-slide');
    info.slideItems[targetIndex].classList.add('current-slide');
    info.slideItems[nextIndex].classList.remove('current-slide');
  }
  if (e.key === 'ArrowLeft') {
    prevIndex = indexCurrent - 1 <= -1 ? maxIndex : indexCurrent - 1;
    targetIndex = indexCurrent - 1 <= -1 ? maxIndex : indexCurrent;
    nextIndex = indexCurrent + 1 >= maxIndex ? maxIndex : indexCurrent + 1;
    info.slideItems[prevIndex].classList.remove('current-slide');
    info.slideItems[targetIndex].classList.add('current-slide');
    info.slideItems[nextIndex].classList.remove('current-slide');
  }
}
