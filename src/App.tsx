import React from 'react';
import './App.css';
import RepositoriesList from "./components/RepositoriesList";

const App = () => {
  return (
    <div className="App">
        <h1>Package search</h1>
        <RepositoriesList />
    </div>
  );
}

export default App;
