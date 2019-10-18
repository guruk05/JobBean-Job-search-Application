import React, {useEffect, useState} from 'react';
import './App.css';




const App = () => {
  
  const url = "https://nut-case.s3.amazonaws.com/jobs.json";
   
  const [jobs , setJobs] = useState([]);
  console.log(jobs);
 
 const getData = async() =>{
  const jobData = await fetch(url);
  const data = await jobData.json();
  // console.log(data.data);
  setJobs(data.data);

  // console.log(data.data[0].title);

}

getData();

  return (
    <div className="App">
      <header className="App-header">
        Job Search
      </header>
      <p>Search Jobs Here</p>
      <form className = "search-Jobs">
        <input className = "search-Form" type ="text" name="searchJob"/>
        <button className = "submit-Button"> Submit </button>
      </form>
    </div>
  );
}

export default App;
