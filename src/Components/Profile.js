import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import './style/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const revervedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <section className="my-profile">
      <div className="container">
        <table>
          <thead>My Missions</thead>
        </table>
        <table>
          <thead>My Rockets</thead>
          <tbody>
            {revervedRockets.map((element) => (
              <tr
                key={element.rocket_id}
              >
                {element.rocket_name}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
