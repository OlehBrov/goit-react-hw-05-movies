import { IconContext } from 'react-icons/lib';
import { MdNoPhotography } from 'react-icons/md';
const ActorPhoto = ({ el }) => {
  if (el.profile_path) {
    return (
      <img
        src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
        alt={el.name}
      />
    );
  } else
    return (
      <IconContext.Provider
            value={{ color: 'grey', className: 'global-class-name', size: '10em' }}
      >
        <MdNoPhotography />
      </IconContext.Provider>
    );
};

export default ActorPhoto;
