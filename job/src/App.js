import React, {useEffect, useState} from 'react';
import Job from './Jobs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  const [search , setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  
 
  useEffect(() => {
    getData();
  },[search]); 

 const getData = async() =>{
  const jobData = await fetch(url);
  const data = await jobData.json();
  setJobs(data.data);
  console.log(data);
}  

 const updateSearch = (e) => {
  setSearch(e.target.value);    
}

 const getSearch = (e) => {
   e.preventDefault();
   let filteredJobs = jobs.filter(job => job.location === search || job.companyname === search );
   setJobs(filteredJobs);
   console.log(filteredJobs);
 }; 

  return (
    <div className="App">
      <header className="App-header">
        Job Search
      </header>
      <div className = "searchContext"><h4>Search your dream jobs here</h4></div>
      <form onSubmit = {getSearch} className = "search-Jobs">
        <input className = "search-Form" type ="text" value = {search} onChange = {updateSearch} name="searchJob"/>
        <Button onClick = {getSearch} variant = "outline-secondary" className = "searchButton" >Search</Button>
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
