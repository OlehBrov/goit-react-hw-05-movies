import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from './Card';

const TrendingGallery = ({ movies }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (!movies) return;
    gsap.set('.poster-descr', { yPercent: 100, opacity: 0 });
    gsap.from('.movie-gallery-item', {
      yPercent: -100,
      opacity: 0,
      scale: 0.7,
      stagger: {
        amount: 3,
        from: 'start',
        grid: 'auto',
        ease: 'power2.inOut',
      },
      // duration: 0.1,
    });

    const movieCard = gsap.utils.toArray('.movie-gallery-item');
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
  });
  return (
    <div className="container home-section">
      <h1 className="home-section-header">Today trending movies</h1>
      <div className="movie-gallery-list">
        {movies.map(movie => (
          <Card movie={movie} location={{ from: location}} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingGallery;

// const TrendGall = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const TrendMovieItem = styled.li`
//   font-size: 18px;
//   color: darkblue;
//   list-style: none;
// `;

// const TrendMovieLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   &:hover {
//     color: tomato;
//   }
// `;
