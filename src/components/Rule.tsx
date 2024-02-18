import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface RuleProps {
  title: string;
  expanded: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Rule: React.FC<RuleProps> = ({ title, expanded, onToggle }) => (
  <Accordion expanded={expanded}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
      <FormControlLabel
        aria-label="Acknowledge"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={<Checkbox onChange={onToggle} />}
        label={title}
        style={{ marginRight: 'auto' }}
      />
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Headers and URL regex rules go here.</Typography>
    </AccordionDetails>
  </Accordion>
);

export default Rule;
