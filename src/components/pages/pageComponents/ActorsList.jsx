import styled from "styled-components";
import ActorPhoto from "./ActorPhoto";


const ActorsList = ({ actorsList }) => {
  return (
    <ActorsCatsList>
      {actorsList.map(el => (
        <ActorsListItem key={el.cast_id}>
          <div>
                  <ActorPhoto el={ el} />
           
            <p>{el.name}</p> <p>Character: {el.character}</p>
          </div>
        </ActorsListItem>
      ))}
    </ActorsCatsList>
  );
};

export default ActorsList;

const ActorsCatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

const ActorsListItem = styled.li`
    list-style: none;
`