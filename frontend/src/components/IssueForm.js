import React, { useState } from 'react';

function IssueForm({ handleFormSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [owner, setOwner] = useState(initialValues.owner || '');
  const [status, setStatus] = useState(initialValues.status || '');
  const [effort, setEffort] = useState(initialValues.effort || '');
  const [completionDate, setCompletionDate] = useState(initialValues.completionDate || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      owner,
      status,
      effort,
      completionDate,
    };
    handleFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} required />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select status</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </label>
      <label>
        Effort:
        <input type="number" value={effort} onChange={(e) => setEffort(e.target.value)} required />
      </label>
      <label>
        Completion Date:
        <input type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default IssueForm;
