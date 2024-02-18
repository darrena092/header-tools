import React, { useState } from 'react';
import { Button, TextField, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface HeadersProps {
  headers: { name: string; value: string }[];
  onHeadersChange: (newHeaders: { name: string; value: string }[]) => void;
}

const HeaderCapture: React.FC<HeadersProps> = ({ headers, onHeadersChange }) => {
  const [newHeader, setNewHeader] = useState({ name: '', value: '' });

  const handleAddHeader = () => {
    if (newHeader.name && newHeader.value) {
      const updatedHeaders = [...headers, newHeader];
      onHeadersChange(updatedHeaders);
      setNewHeader({ name: '', value: '' });
    }
  };

  const handleDeleteHeader = (index: number) => {
    const updatedHeaders = headers.filter((_, i) => i !== index);
    onHeadersChange(updatedHeaders);
  };

  return (
    <div>
      <List>
        {headers.map((header, index) => (
          <ListItem key={index} dense>
            <ListItemText primary={`${header.name}: ${header.value}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteHeader(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Header Name"
            variant="outlined"
            size="small"
            value={newHeader.name}
            onChange={(e) => setNewHeader({ ...newHeader, name: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Header Value"
            variant="outlined"
            size="small"
            value={newHeader.value}
            onChange={(e) => setNewHeader({ ...newHeader, value: e.target.value })}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button onClick={handleAddHeader} style={{ marginTop: '10px' }}>
        Add Header
      </Button>
    </div>
  );
};

export default HeaderCapture;
