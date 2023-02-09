import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';
import './Company.css';

const Company = ({ company }) => {
  return (
    <div className='card__container'>
      <div className='Company_info'>
        <Link to={`/companies/${company.handle}`}>{company.name}</Link>
        <p className='Company_info__description'>{company.description}</p>
      </div>
      <div>
        {company.logoUrl ? (
          <img src={company.logoUrl} alt={`${company.name}'s logo`} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Company;
