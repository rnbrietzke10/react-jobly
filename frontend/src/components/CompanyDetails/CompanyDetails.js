import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../../JoblyAPIHelper';
import Job from '../Job/Job';

import './CompanyDetails.css';

const CompanyDetails = () => {
  const [companyData, setCompanyData] = useState({});
  let { handle } = useParams();
  useEffect(() => {
    async function getData() {
      const data = await JoblyApi.getCompany(handle);
      setCompanyData(data);
    }
    getData();
  }, [handle]);

  return (
    <div className='CompanyDetails__wrapper outer-container'>
      <div className='CompanyDetails__container'>
        <div className='CompanyDetails__info__container'>
          <h2 className='CompanyDetails__title'>{companyData.name}</h2>
          <h5 className='CompanyDetails__numEmp'>
            Number of Employess: {companyData.numEmployees}
          </h5>
          <p className='CompanyDetails__description'>
            <span>About us:</span> {companyData.description}
          </p>
        </div>
        {companyData.logoUrl ? (
          <img src={companyData.logoUrl} alt='Company Logo' />
        ) : (
          ''
        )}
      </div>
      <div className='CompanyDetails__jobs__container'>
        {companyData.jobs
          ? companyData.jobs.map(job => <Job key={job.id} job={job} />)
          : ''}
      </div>
    </div>
  );
};

export default CompanyDetails;
