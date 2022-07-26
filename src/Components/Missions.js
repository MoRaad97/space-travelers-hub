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
      <table className="container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col"> </th>
            </tr>
          </thead>
        </table>
        {missions.map((mission) => (
          <div className="mission-card" key={mission.mission_id}>
            <td>
              <th className="mission-name">{mission.mission_name}</th>
              <td>
                {mission.joined && (<span>Reserved</span>)}
                {mission.description}
              </td>
              <td>
                {!mission.join && <button className="not-reserved" id="member" type="button"> NOT A MEMBER</button>}
                {mission.join && <button className="join-mission" id="member" type="button"> ACTIVE MEMBER</button>}
              </td>
              <td>
                {!mission.join && (
                <button id={mission.mission_id} type="button" className="join-mission" onClick={handle}>
                  JOIN MISSION
                </button>
                )}
                {mission.join && (
                <button id={mission.mission_name} type="button" className="not-reserved" onClick={handle}>
                  LEAVE MISSION
                </button>
                )}
              </td>
            </td>
          </div>
        ))}
      </table>
    </section>

  );
};

export default Missions;
