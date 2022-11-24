/* import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from './missionList';
import './Missions.css';
import { getMissions } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  console.log(missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <div className="mission__container">
      <table className="table">
        <thead>
          <tr className="row">
            <th className="column head">Mission</th>
            <th className="column head">Description</th>
            <th className="column head">Status</th>
            <th className="column head">{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionList key={mission.id} name={mission.name} description={mission.description} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions; */
