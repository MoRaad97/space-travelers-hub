import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { loadRocketsThunk } from "../Redux/Rockets/Rockets";

const Rockets = () => {
  // get rockets data from the store
  const rockets = useSelector(state => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRocketsThunk());
  }, []);

  return (
    <section className="rockets">
      {rockets.map((rocket) => {
        return (
          <div className="rocket-card" key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type='button' handel></button>
          </div>
        )
      })}
    </section>

  )
};

export default Rockets;