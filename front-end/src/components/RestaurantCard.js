import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

const RestaurantCard = ({image, name, description, openingHours, closingHours}) => {
return (
<div className="d-flex flex-row">
<div className="card" style={{ width: '18rem' }}>
<img src={image} className="card-img-top" alt={name} />
<div className="card-body">
<h5 className="card-title">{name}</h5>
<p className="card-text">{description}</p>
<p className="card-text">Horaires d'ouverture : {openingHours} - {closingHours}</p>
<a href="#" className="btn btn-primary">Réserver une table</a>
</div>
</div>
</div>
);
}

RestaurantCard.propTypes = {
image: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
openingHours: PropTypes.string.isRequired,
closingHours: PropTypes.string.isRequired
};

export default RestaurantCard;