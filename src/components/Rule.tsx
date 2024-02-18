import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RuleTitle from './RuleTitle';
import { RuleData } from './RuleList';
import DomainRegex from './DomainRegex';
import HeaderCapture from './HeaderCapture';

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

  const handleHeadersChange = (newHeaders: { name: string; value: string }[]) => {
    onRuleChange({ ...rule, headers: newHeaders });
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
        <DomainRegex domains={rule.domains} onDomainsChange={handleDomainsChange} />
        <HeaderCapture headers={rule.headers} onHeadersChange={handleHeadersChange} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Rule;
