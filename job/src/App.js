import React, {useEffect, useState} from 'react';
import Job from './Jobs';
import Pagination from './pagination';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  const [search , setSearch] = useState("");
  // const [filterSearch, setFilterSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobsPerPage] = useState(75);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexOfAllJobs, setIndexOfAllJobs] = useState("1709");
 
  useEffect(() => {
    getData();
  },[query]); 
  
  const getData = async() => {
    setLoading(true);
    const jobData = await fetch(url);
    const data = await jobData.json();
    setJobs(data.data);
    setLoading(false);
  console.log(data);
}  

 const updateSearch = (e) => {
   setSearch(e.target.value);    
}

 const getSearch=(e) => {
  // e.stopPropagation();
  e.preventDefault();
  setQuery(search);
  // setFilterSearch(search);
  console.log("Called");
  let filteredJobs = jobs.filter(job => job.location === search || job.companyname === search );
  setJobs(filteredJobs);
  let indexOfFilteredJobs = filteredJobs.length; 
  setIndexOfAllJobs(indexOfFilteredJobs);
 }; 
  
 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
}

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob,indexOfLastJob);
    console.log(indexOfAllJobs);

    if(loading) { 
      return( 
       <div><h3> loading ... </h3></div>
      )
     };

  return (

    <div className="App">
      <header className="App-header">
        JobBean
      </header>
      <div className = "searchContext"><h4>Search your dream jobs here</h4></div>
      <form onSubmit={getSearch} className = "search-Jobs">
        <input className = "search-Form" type ="text" value = {search} onChange = {updateSearch} name="searchJob"/>
        <Button variant = "outline-secondary" type="submit" className = "searchButton" >Search</Button>
      </form>
      <div className = "indexOfJobs"><h5>Total Jobs Found : {indexOfAllJobs}</h5></div>
      {currentJobs.map(jobData => (
         <Job key = {jobData.companyName}
              title = {jobData.title} 
              companyName = {jobData.companyname} 
              location = {jobData.location} 
              experience = {jobData.experience} 
              skills = {jobData.skills} 
              type = {jobData.type} 
              endDate = {jobData.enddate} 
              apply = {jobData.applylink}
              indexOfAllJobs = {indexOfAllJobs} />  
      ))}
      <Pagination className = "pagination" 
      jobsPerPage = {jobsPerPage} 
    totalPosts ={jobs.length} 
    paginate = {paginate} />
    </div>
  );
}



export default App;
