const listItemFiller = {
  achievement1: {
    title: '27 років досвіду та іновацій -',
    description:
      'запорука високої якості, надійності та ефективності обладнання виробництва НВФ “Продекологія”.',
  },
  achievement2: {
    title: 'Продукцію фірми поставлено',
    description: 'в 46 країн, на 3 континенти 4-х частин світу.',
  },
  achievement3: {
    title: 'Обладнання НВФ “Продекологія” успішно експлуатується',
    description: 'на підприємствах 58 галузей та підгалузей промисловості.',
  },
  achievement4: {
    title:
      'Фізико-хімічна, технологічна лабораторії, лабораторії електростатичної сепарації та магнітних досліджень',
    description:
      'забезпечені усім необхідним обладнанням та апаратурою для проведення досліджень різних матеріалів.',
  },
  achievement5: {
    title: 'Фірма активно займається патентуванням технічних рішень,',
    description: 'що використовуються в конструкціях обладнання.',
  },
  achievement6: {
    title: 'Висока кваліфікація та професіоналізм кожного працівника фірми -',
    description: 'запорука надійності та ефективності обладнання фірми.',
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
  [...e.currentTarget.closest('ul').children].forEach(el => {
    el.children[0].classList.remove('achievement-active');
  });
  aboutTitleRef.textContent = listItemFiller[e.currentTarget.id].title;
  aboutDescriptionRef.textContent = listItemFiller[e.currentTarget.id].description;
  Object.entries(listItemFiller).forEach(el => {
    if (el[1].title === aboutTitleRef.textContent.trim()) {
      e.currentTarget.children[0].classList.add('achievement-active');
    }
  });
};

[...listToShow].forEach(el => el.addEventListener('mouseenter', e => itemClickHandler(e)));
