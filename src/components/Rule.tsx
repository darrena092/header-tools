import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RuleTitle from './RuleTitle';
import { RuleData } from './RuleList';
import DomainRegex from './DomainRegex';
import HeaderCapture, { Header } from './HeaderCapture';

interface RuleProps {
  rule: RuleData;
  expanded: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  onRuleChange: (updatedRule: RuleData) => void;
}

const Rule: React.FC<RuleProps> = ({ rule, expanded, onToggle, onChange, onRuleChange }) => {
  const handleDomainsChange = (newDomains: string[]) => {
    onRuleChange({ ...rule, domains: newDomains });
  };

  const handleHeadersChange = (newHeaders: Header[]) => {
    onRuleChange({ ...rule, headers: newHeaders });
  };

  return (
    <Accordion expanded={expanded} onChange={(event, isExpanded) => onChange(event, isExpanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: expanded ? 'rgb(50, 50, 50)' : 'inherit',
          '.Mui-expanded': {
            backgroundColor: 'rgb(50, 50, 50)',
          },
          '&:hover': {
            backgroundColor: 'rgb(50, 50, 50)',
          },
        }}
      >
      <RuleTitle 
        title={rule.title} 
        onTitleChange={(newTitle) => onRuleChange({ ...rule, title: newTitle })}
      />
      </AccordionSummary>
      <AccordionDetails>
        <DomainRegex domains={rule.domains} onDomainsChange={handleDomainsChange} />
        <HeaderCapture headers={rule.headers} onHeadersChange={handleHeadersChange} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Rule;
