import React from 'react';
import './App.css';
import RuleList from './components/RuleList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#004570"
    }
  },
  spacing: 8
});

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <header className="App-header">
          <h1>Header Tools</h1>
        </header>
          
          <div style={{ padding: '20px' }}>
            <RuleList />
          </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
