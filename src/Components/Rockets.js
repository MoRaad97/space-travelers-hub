
import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { rocketsReducer } from "../Redux/Rockets/Rockets";

const Rockets = () => {
  // get rockets data from the store
  const rockets = useSelector(state => state.rockets);

  const dispatch = useDispatch();

  const handle = e => {
    const id = e.target.id;
    dispatch(rocketsReducer.ReservationAction({ id }))
  }

  return (
    <section className="rockets">
      {rockets.map((rocket) => {
        return (
          <div className="rocket-card" key={rocket.rocket_id}>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            {rocket.reserved && (<span>ROCKET REVERVED!!!!!!</span>)}
            <div>
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              {!rocket.reserved && (<button type='button'
                id={rocket.rocket_id}
                onClick={handle}>Reserve</button>)}
              {rocket.reserved && (<button type='button'
                id={rocket.rocket_id}
                onClick={handle}>Cancel Reservation</button>)}
            </div>
          </div>
        )
      })}
    </section>

  )
};

export default Rockets;
