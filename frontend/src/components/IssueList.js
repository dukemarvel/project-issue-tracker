import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('/api/issues/')
      .then(response => {
        setIssues(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
    return (
      <div>
        <h1>Issue List</h1>
        {issues.map(issue => (
          <div key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.owner}</p>
            <p>{issue.status}</p>
            <p>{issue.creation_date}</p>
            <p>{issue.effort_required}</p>
            <p>{issue.estimated_completion_date}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default IssueList;