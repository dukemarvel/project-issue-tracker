import React, { useState } from 'react';
import axios from 'axios';

const IssueAdd = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [status, setStatus] = useState('');
  const [effort, setEffort] = useState(0);
  const [completionDate, setCompletionDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/issues/', {
        title,
        owner,
        status,
        effort,
        completion_date: completionDate,
      });
      const newIssue = response.data;
      onAdd(newIssue);
      setTitle('');
      setOwner('');
      setStatus('');
      setEffort(0);
      setCompletionDate('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value=""></option>
            <option value="New">New</option>
            <option value="Open">Open</option>
            <option value="Assigned">Assigned</option>
            <option value="Fixed">Fixed</option>
            <option value="Verified">Verified</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div>
          <label htmlFor="effort">Effort (in days):</label>
          <input
            type="number"
            id="effort"
            value={effort}
            onChange={(e) => setEffort(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="completionDate">Completion Date:</label>
          <input
            type="date"
            id="completionDate"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Issue</button>
        </div>
      </form>
    </div>
  );
};

export default IssueAdd;
