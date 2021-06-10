const listItemFiller = {
  achievement1: {
    title: 'НВП Продекологія - лідер у галузі проектування та виробництва',
    description:
      'магнітних, електростатичних, вихреструмових сепараторів металодетекторів та магнітних освітлювачів-грязьовиків на пострадянському просторі та у Східній Європі',
  },
  achievement2: {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Ab itaque enim doloribus blanditiis illum atque!',
  },
  achievement3: {
    title: 'Explicabo sapiente perspiciatis magnam, repellendus nam',
    description: 'pariatur odit dolor recusandae in aspernatur dignissimos cum?',
  },
  achievement4: {
    title: 'Repellendus in eius eveniet, aliquam perspiciatis nihil ratione.',
    description:
      'Necessitatibus asperiores quis voluptatem, possimus, tempora nobis, doloremque porro facere voluptatum minima saepe velit.',
  },
  achievement5: {
    title: 'Voluptatibus debitis laboriosam atque doloribus dolores aliquam facere.',
    description:
      'Sequi qui facilis velit cum dignissimos hic pariatur sunt inventore minima numquam dolorem, aliquam dolor molestias provident totam.',
  },
  achievement6: {
    title: 'Neque delectus hic distinctio? Neque modi quam veritatis odit',
    description:
      'dicta nostrum magnam voluptatum quod perspiciatis incidunt. Voluptas adipisci harum recusandae ipsa, veniam voluptatibus culpa quos aliquid in nostrum',
  },
};

const aboutTitleRef = document.querySelector('.achievement-about__title');
const aboutDescriptionRef = document.querySelector('.achievement-about__description');
const listItemWrapperRef = document.querySelector('.achievement-count__wrapper ');
const scrollHelperRef = document.querySelector('#scroll-helper');
const listToShow = document.querySelectorAll('.achievement');

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      listToShow.forEach((el, index) => setTimeout(() => el.classList.add('visible'), 150 * index));
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

const itemClickHandler = e => {
  aboutTitleRef.textContent = listItemFiller[e.currentTarget.id].title;
  aboutDescriptionRef.textContent = listItemFiller[e.currentTarget.id].description;
};

listToShow.forEach(el => el.addEventListener('mouseenter', e => itemClickHandler(e)));

const logoRefs = document.querySelectorAll('.st0');
[...logoRefs].forEach((el, index) => el.classList.add(`motion${index}`));
