import React from 'react';
import { TextField, IconButton, List, ListItem, Grid, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface Header {
  name: string;
  value: string;
}

interface HeadersProps {
  headers: Header[];
  onHeadersChange: (newHeaders: Header[]) => void;
}

const HeaderCapture: React.FC<HeadersProps> = ({ headers, onHeadersChange }) => {

  const handleHeaderChange = (part: keyof Header, value: string, index: number) => {
    const updatedHeaders = headers.map((header, i) => i === index ? { ...header, [part]: value } : header);
    onHeadersChange(updatedHeaders);
  };

  const handleDeleteHeader = (index: number) => {
    const updatedHeaders = headers.filter((_, i) => i !== index);
    onHeadersChange(updatedHeaders);
  };

  const handleAddHeader = () => {
    onHeadersChange([...headers, { name: "my-header", value: "my-header-value"}]);
  };

  return (
    <div>
      <Typography variant="subtitle1" style={{ margin: '20px 0 10px' }}>
        Headers to Inject
      </Typography>
      <List>
        {headers.map((header, index) => (
          <ListItem key={index} dense>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Header Name"
                  value={header.name}
                  onChange={(e) => handleHeaderChange('name', e.target.value, index)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Header Value"
                  value={header.value}
                  onChange={(e) => handleHeaderChange('value', e.target.value, index)}
                />
              </Grid>
              <Grid item xs={1}>
              {headers.length > 1 && (
                <IconButton onClick={() => handleDeleteHeader(index)}>
                  <DeleteIcon />
                </IconButton>
              )}
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleAddHeader}>
        Add Header
      </Button>
    </div>
  );
};

export default HeaderCapture;
