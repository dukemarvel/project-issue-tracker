import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const IssueEdit = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    owner: '',
    status: '',
    effort: '',
    completionDate: ''
  });

  const { id } = props.match.params;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/issues/${id}/`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/issues/${id}/`, formData)
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Edit Issue</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div>
          <label htmlFor="effort">Effort:</label>
          <input type="number" id="effort" name="effort" value={formData.effort} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="completionDate">Completion Date:</label>
          <input type="date" id="completionDate" name="completionDate" value={formData.completionDate} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default IssueEdit;
