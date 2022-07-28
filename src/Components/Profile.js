import React from 'react';
import { useSelector } from 'react-redux';
import './style/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.mission);

  const revervedRockets = rockets.filter((rocket) => rocket.reserved);
  const joinedMissions = missions.filter((mission) => mission.joined);
  return (
    <section className="my-profile">
      <div className="container">
        <table>
          <thead>My Missions</thead>
          <tbody>
            {joinedMissions.map((element) => (
              <tr
                key={element.mission_id}
                className="profile-row"
              >
                {element.mission_name}
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>My Rockets</thead>
          <tbody>
            {revervedRockets.map((element) => (
              <tr
                key={element.rocket_id}
                className="profile-row"
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
