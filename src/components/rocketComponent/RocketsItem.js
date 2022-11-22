import React from 'react';
import PropTypes from 'prop-types';

const RocketsItem = (props) => {
  const { rocket: { name, image, description } } = props;
  return (
    <div className="rocket-container">
      <img alt="rocket" src={image} className="rocket-img" />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

RocketsItem.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketsItem;
