import React from 'react';


const Job = ({title, companyName, location, experience, skills, type, endDate, apply}) =>{
    return (
         <div className = "card">
            <div className = "title"><h2>{title}</h2> </div> 
            <div className = "companyName"> <h4>{companyName}</h4></div>
            <div className = "location"> <p>{location}</p></div>
            <div className = "experience"> <p>{experience}</p></div>
            <div className = "skills"> <p>{skills}</p></div>
            <div className = "type"> <p>{type}</p></div>
            <div className = "endDate"><p>{endDate}</p></div>
            <div className = "apply"><p>{apply}</p></div>
        </div>
    )
};


export default Job;
