import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueList from './components/IssueList';
//import IssueFilter from './components/IssueFilter';
//import IssueForm from './components/IssueForm';
//import IssueEdit from './components/IssueEdit';


function App() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [filterParams, setFilterParams] = useState({});

useEffect(() => {
  fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await axios.get("/api/issues/", {
        params: filterParams
      });
      setIssues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (params) => {
    setFilterParams(params);
  };

  const handleIssueSelect = (issue) => {
    setSelectedIssue(issue);
  };

  const handleIssueEdit = async (issue) => {
    try {
      await axios.put("/api/issues/${issue.id}/", issue);
      fetchIssues();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIssueAdd = async (issue) => {
    try {
      await axios.post('/api/issues/', issue);
      fetchIssues();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIssueDelete = async (issue) => {
    try {
      await axios.delete("/api/issues/${issue.id}/");
      fetchIssues();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Issue Tracker</h1>
      {/*<IssueFilter onFilter={handleFilter} />
      <IssueList issues={issues} onIssueSelect={handleIssueSelect} onIssueDelete={handleIssueDelete} />
      {selectedIssue ? <IssueEdit issue={selectedIssue} onIssueEdit={handleIssueEdit} /> : null}
  <IssueForm onIssueAdd={handleIssueAdd} />*/}
      <h1><IssueList/></h1>
    </div>
  );
}

export default App;
