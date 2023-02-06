import React from 'react';

const Company = ({ company }) => {
  return (
    <div>
      <div>
        <h3>{company.name}</h3>
        <h5>Number of Employees: {company.numEmployees}</h5>
        <p>{company.description}</p>
      </div>
      <div>
        <img src={company.logoUrl} alt={`${company.name}'s logo`} />
      </div>
    </div>
  );
};

export default Company;
