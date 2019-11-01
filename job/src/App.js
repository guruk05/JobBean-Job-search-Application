import React, {useEffect, useState} from 'react';
import Job from './Jobs';
import './App.css';
import { Button } from 'reactstrap';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  const [search , setSearch] = useState("");
  
 
  useEffect(() => {
    getData();
  }, []); 

 const getData = async() =>{
  const jobData = await fetch(url);
  const data = await jobData.json();
  setJobs(data.data);
}  

 const updateSearch = (e) => {
  setSearch(e.target.value);
}

 const getSearch = (e) => {
   e.preventDefault();
   let filteredJobs = jobs.filter(job => job.location === search );
   setJobs(filteredJobs)
 }; 

  return (
    <div className="App">
      <header className="App-header">
        Job Search
      </header>
      <p>Search Jobs Here</p>
      <form onSubmit = {getSearch} className = "search-Jobs">
        <input className = "search-Form" type ="text" value = {search} onChange = {updateSearch} name="searchJob"/>
        <Button outline color="secondary">Search</Button>
      </form>
      {jobs.map(jobData => (
         <Job key = {jobData.companyName}
              title = {jobData.title} 
              companyName = {jobData.companyname} 
              location = {jobData.location} 
              experience = {jobData.experience} 
              skills = {jobData.skills} 
              type = {jobData.type} 
              endDate = {jobData.enddate} 
              apply = {jobData.applylink} />  
      ))}
    </div>
  );
}



export default App;
