import React, { useState } from 'react';
import JoblyApi from '../../JoblyAPIHelper';

import './Job.css';

const Job = ({ job }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [applications, setApplications] = useState(user.applications);

  async function handleApply() {
    const allUserInfo = await JoblyApi.applyToJob(
      user.username,
      job.id,
      localStorage.getItem('token')
    );
    await localStorage.setItem('user', JSON.stringify(allUserInfo.user));
    console.log(allUserInfo.user);
    setApplications(allUserInfo.user.applications);
  }

  return (
    <div className="card__container">
      <div className="Job__description">
        <h3 className="Job__title">{job.title}</h3>
        <h4>{job.companyName} </h4>
        <h5>Salary: {job.salary}</h5>
        {job.equity ? <h5>equity: {job.equity}</h5> : ''}
      </div>
      {applications.includes(job.id) ? (
        <h3 className="applied">Applied!</h3>
      ) : (
        <button className="btn Job__apply-btn" onClick={handleApply}>
          Apply
        </button>
      )}
    </div>
  );
};

export default Job;
