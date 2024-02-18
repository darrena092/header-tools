import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RuleTitle from './RuleTitle';
import { RuleData } from './RuleList';

interface RuleProps {
  rule: RuleData;
  expanded: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  onRuleChange: (updatedRule: RuleData) => void;
}

const Rule: React.FC<RuleProps> = ({ rule, expanded, onToggle, onChange, onRuleChange }) => {
  const handleTitleChange = (newTitle: string) => {
    console.log('Title changed to:', newTitle);
  };

  return (
    <Accordion expanded={expanded} onChange={(event, isExpanded) => onChange(event, isExpanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
      <RuleTitle 
        title={rule.title} 
        onTitleChange={(newTitle) => onRuleChange({ ...rule, title: newTitle })}
      />
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Headers and URL regex rules go here.</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Rule;
