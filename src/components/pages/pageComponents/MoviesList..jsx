import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from './Card';

const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (!moviesList || moviesList.length === 0) return;
     const movieCard = gsap.utils.toArray('.movie-gallery-item');
    gsap.set('.poster-descr', { yPercent: 100, opacity: 0 });
    gsap.from('.movie-gallery-item', {
      yPercent: -100,
      opacity: 0,
      scale: 0.7,
      stagger: {
        amount: 1,
        from: 'start',
        grid: 'auto',
        ease: 'power2.inOut',
      },
      onComplete: () => {
      movieCard.forEach(card => {
      const description = card.children[0].children[0].children[1];

      card.addEventListener('mouseenter', () =>
        gsap.to(description, {
          yPercent: 0,
          opacity: 1,
        })
      );
      card.addEventListener('mouseleave', () =>
        gsap.to(description, {
          yPercent: 100,
          opacity: 0,
        })
      );
    });
     }
    });

   

  });
  if (moviesList.length === 0) return <h1>No movies found</h1>;

  return (
    <div className="movie-gallery-list">
      {moviesList.map(movie => (
        <Card movie={movie} state={{ from: location}} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
