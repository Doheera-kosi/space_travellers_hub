import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';

const RocketsItem = (props) => {
  const {
    rocket: {
      id, name, image, description,
    },
  } = props;
  const dispatch = useDispatch();
  const reserveCancelRocket = () => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="rocket-container">
      <img alt="rocket" src={image} className="rocket-img" />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-details">{description}</p>
        <button type="button" className="rocket-reserve-btn" onClick={reserveCancelRocket}>Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketsItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketsItem;
