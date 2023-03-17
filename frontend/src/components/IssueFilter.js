import React, { useState } from 'react';

function IssueFilter({ handleFilter }) {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilter(status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter by Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </label>
      <button type="submit">Filter</button>
    </form>
  );
}

export default IssueFilter;
