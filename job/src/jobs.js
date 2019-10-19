import React from 'react';


const Job = ({title, companyName, location, experience, skills, type, endDate, apply}) =>{


    return (
        <div>
            <h2>{title}</h2>
            <h4>{companyName}</h4>
            <p>{location}</p>
            <p>experience</p>
            <p>skills</p>
            <p>type</p>
            <p>endDate</p>
            <p>apply</p>
        </div>

    );
}


export default Job;
