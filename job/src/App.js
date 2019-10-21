import React, {useEffect, useState} from 'react';
import Job from './Jobs';
import './App.css';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  const [filteredJobs , setFilteredJobs] = useState("");
  const [filterResults , setFilteredResults] = useState('Bangalore');
  // console.log(jobs);
 
  useEffect(() => {
    getData();
  }, [filterResults]); 

  const getSearch = (e) => {
    setFilteredJobs(e.target.value);
  };

  const submitFilter = (e) => {
    e.preventDefault()
    setFilteredResults(filteredJobs)
  }

 const getData = async() =>{
  const jobData = await fetch(url);
  const data = await jobData.json();
  setJobs(data.data);
  // console.log(data.data);
}




  return (
    <div className="App">
      <header className="App-header">
        Job Search
      </header>
      <p>Search Jobs Here</p>
      <form className = "search-Jobs">
        <input className = "search-Form" type ="text" name="searchJob" value={filteredJobs} onChange = {getSearch}/>
        <button className = "submit-Button"> Submit </button>
      </form>
      {jobs.map(jobData => (
         <Job key = {jobData.title}
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
