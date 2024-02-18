import React, { useState } from 'react';
import { Button, TextField, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface DomainRegexProps {
  domains: string[];
  onDomainsChange: (newDomains: string[]) => void;
}

const DomainRegex: React.FC<DomainRegexProps> = ({ domains, onDomainsChange }) => {
  const [newDomain, setNewDomain] = useState('');

  const handleAddDomain = () => {
    if (newDomain) {
      const updatedDomains = [...domains, newDomain];
      onDomainsChange(updatedDomains);
      setNewDomain('');
    }
  };

  const handleDeleteDomain = (index: number) => {
    const updatedDomains = domains.filter((_, i) => i !== index);
    onDomainsChange(updatedDomains);
  };

  return (
    <div>
      <List>
        {domains.map((domain, index) => (
          <ListItem key={index} dense>
            <ListItemText primary={domain} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteDomain(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <TextField
        label="New Domain Regex"
        variant="outlined"
        size="small"
        value={newDomain}
        onChange={(e) => setNewDomain(e.target.value)}
        fullWidth
      />
      <Button onClick={handleAddDomain} style={{ marginTop: '10px' }}>
        Add Domain
      </Button>
    </div>
  );
};

export default DomainRegex;
