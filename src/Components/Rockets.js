import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { rocketsReducer } from '../Redux/Rockets/Rockets';
import './style/Rockets.css';

const Rockets = () => {
  // get rockets data from the store
  const rockets = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  const handle = (e) => {
    const { id } = e.target;
    dispatch(rocketsReducer.ReservationAction({ id }));
  };

  return (
    <section className="rockets">
      <div className="container">
        {rockets.map((rocket) => (
          <div className="rocket-card" key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            <div>
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved && (<span>Reserved</span>)}
                {rocket.description}
              </p>
              {!rocket.reserved && (
                <button
                  className="not-reserved"
                  type="button"
                  id={rocket.rocket_id}
                  onClick={handle}
                >
                  Reserve Rocket
                </button>
              )}
              {rocket.reserved && (
                <button
                  className="reserved"
                  type="button"
                  id={rocket.rocket_id}
                  onClick={handle}
                >
                  Cancel Reservation
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Rockets;
