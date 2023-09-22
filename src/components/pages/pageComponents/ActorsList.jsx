
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ActorsList = ({ actorsList }) => {

  const list = useRef();
  const imgRef = useRef(null);
  // const imgs = list.
  useEffect(() => {
    const cards = document.querySelectorAll('.casting-actor');
    if (cards.length === 0) {
      return;
    }
    const imgsTags = document.querySelectorAll('.actor-image');
    const promArray = [];
    imgsTags.forEach(img => {
      promArray.push(
        new Promise((resolve, reject) => {
          return (img.onload = () => {
            console.log('img loaded');
            resolve();
          });
        })
      );
    });

    Promise.all(promArray).then(() => {
      ScrollTrigger.refresh();
    });

    gsap.set(cards, {
      opacity: 0,
    });

    ScrollTrigger.batch(cards, {
      interval: 0.1,
      invalidateOnRefresh: true,
      start: 'top 80%',
      end: 'top top',
      scrub: true,
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          stagger: { each: 0.1, grid: 'auto' },
          overwrite: true,
        }),
      onLeave: batch => gsap.to(batch, { opacity: 0, overwrite: true }),
      onEnterBack: batch =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.1,
          overwrite: true,
        }),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0, overwrite: true }),
    });
  });
  return (
    <div className="casting-list" ref={list}>
      {actorsList.map(el => (
        <div className="casting-actor" key={el.cast_id}>
          <img
            ref={imgRef}
            className="actor-image"
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                : 'https://placehold.co/200x300?text=No%20image'
            }
            alt={el.name}
          />
          <p>{el.name}</p> <p>Character: {el.character}</p>
        </div>
      ))}
    </div>
  );
};

export default ActorsList;

// const ActorsCatsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 15px;
// `;

// const ActorsListItem = styled.li`
//   list-style: none;
// `;
