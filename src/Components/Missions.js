import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { missionsReducer } from '../Redux/Missions/Missions';
import './style/missions.css';

const Missions = () => {
  // get rockets data from the store
  const missions = useSelector((state) => state.mission);

  const dispatch = useDispatch();

  const handle = (e) => {
    const { id } = e.target;
    dispatch(missionsReducer.joinAction({ id }));
  };

  return (
    <section className="missions">
      <div className="container">
        <table className="table-bordered">
          <thead>
            <tr>
              <td>Mission</td>
              <td>Description</td>
              <td>Status</td>
              <td> </td>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr className="mission-card" key={mission.mission_id}>
                <td>
                  <p className="mission-name">{mission.mission_name}</p>
                </td>
                <td>
                  {mission.description}
                </td>
                <td>
                  {!mission.joined && <p className="not-member" id="member" type="button"> NOT A MEMBER</p>}
                  {mission.joined && <p className="active-member" id="member" type="button"> ACTIVE MEMBER</p>}
                </td>
                <td>
                  {!mission.joined && (
                    <button id={mission.mission_id} type="button" className="not-joined" onClick={handle}>
                      JOIN MISSION
                    </button>
                  )}
                  {mission.joined && (
                    <button id={mission.mission_id} type="button" className="joined" onClick={handle}>
                      LEAVE MISSION
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

  );
};

export default Missions;
