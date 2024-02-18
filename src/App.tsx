import React from 'react';
import './App.css';
import RuleList from './components/RuleList';

const App: React.FC = () => {
  
  const rules = [
    { id: 1, title: 'Rule 1' },
    { id: 2, title: 'Rule 2' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header Tools</h1>
      </header>

      <div style={{ padding: '20px' }}>
        <RuleList rules={rules} />
      </div>
    </div>
  );
}

export default App;
