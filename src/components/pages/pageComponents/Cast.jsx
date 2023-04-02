import getMovieCredits from "components/utils/getMovieCredits";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const orderCast = arr => {
    const allCasts = arr.reduce((total, actor) => {
      total.push(actor.name);
      return total;
    }, []);
    setCast(allCasts.join(', '));
   
  };
    const { id } = useParams();
    getMovieCredits(id).then(credits => {
        console.log('Credits', credits)
        orderCast(credits.data.cast)
    })
    console.log('CAST', id)
    return <>
        <h1>CAST</h1>
        <h2>Actors: </h2>
        <p>{ cast}</p>
    </>
}

export default Cast;