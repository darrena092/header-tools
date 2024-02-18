import React from 'react';
import { TextField, IconButton, List, ListItem, Grid, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface DomainRegexProps {
  domains: string[];
  onDomainsChange: (newDomains: string[]) => void;
}

const DomainRegex: React.FC<DomainRegexProps> = ({ domains, onDomainsChange }) => {

  const handleDomainChange = (value: string, index: number) => {
    const updatedDomains = domains.map((domain, i) => i === index ? value : domain);
    onDomainsChange(updatedDomains);
  };

  const handleDeleteDomain = (index: number) => {
    const updatedDomains = domains.filter((_, i) => i !== index);
    onDomainsChange(updatedDomains);
  };

  const handleAddDomain = () => {
    onDomainsChange([...domains, ""]);
  };

  return (
    <div>
      <Typography variant="subtitle1" style={{ margin: '20px 0 10px' }}>
        Domain Patterns
      </Typography>
      <List>
        {domains.map((domain, index) => (
          <ListItem key={index} dense>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={domain}
                  onChange={(e) => handleDomainChange(e.target.value, index)}
                />
              </Grid>
              <Grid item>
              {domains.length > 1 && (
                <IconButton onClick={() => handleDeleteDomain(index)}>
                    <DeleteIcon />
                </IconButton>
              )}
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleAddDomain} style={{ marginTop: '10px' }}>
        Add Domain
      </Button>
    </div>
  );
};

export default DomainRegex;
