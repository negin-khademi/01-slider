import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { list, longList, shortList } from './data';

import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  const pervSlide = () => {};
  const nextSlide = () => {};

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, name, image, title, quote } = person;
        return (
          <article className="slide" key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={pervSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
