import React from "react";
import { useSelector } from 'react-redux/es/exports';

const Profile = () => {
  const rockets = useSelector(state => state.rockets);
  const revervedRockets = rockets.filter((rocket) => {
    return rocket.reserved
  })
  return (
    <section className="my-profile">
      {revervedRockets.map((element) => {
        return <h3 key={element.rocket_id}>{element.rocket_name}</h3>
      })}
    </section>
  )
};

export default Profile;