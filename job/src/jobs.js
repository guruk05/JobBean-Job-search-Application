import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Job = ({title, companyName, location, experience, skills, type, endDate, apply}) =>{
    return (
        <Card className="text-left">
  <Card.Header><h4>{title}</h4></Card.Header>
  <Card.Body>
    <Card.Title>{companyName}</Card.Title>
    {/* <hr></hr> */}
    <Card.Text>
      <p>{location}</p>
      <p>{experience}</p>
      <p>{skills}</p>
      <p>{type}</p>
      <p>{endDate}</p>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"><Button variant="primary">{apply}</Button></Card.Footer>
</Card>         
    )
};


export default Job;
