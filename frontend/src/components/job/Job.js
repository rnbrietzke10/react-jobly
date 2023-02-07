import React from 'react';
import './Job.css';

const Job = ({ job }) => {
  return (
    <div className="card__container">
      <div className="Job__description">
        <h3 className="Job__title">{job.title}</h3>
        <h4>{job.companyName} </h4>
        <h5>Salary: {job.salary}</h5>
        {job.equity ? <h5>equity: {job.equity}</h5> : ''}
      </div>
      <button className="btn Job__apply-btn">Apply</button>
    </div>
  );
};

export default Job;
