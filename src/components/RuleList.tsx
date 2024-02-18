import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Rule from './Rule';
import { Header } from './HeaderCapture';

export interface RuleData {
  id: number;
  title: string;
  domains: string[];
  headers: Header[];
}

const RuleList: React.FC = () => {
  const [rules, setRules] = useState<RuleData[]>([]);
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    chrome.storage.local.get(['rules'], (result) => {
      if (result.rules) {
        setRules(result.rules);
      }
    });
  }, []);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addNewRule = () => {
    const newRule: RuleData = {
      id: Date.now(),
      title: "New Rule",
      domains: ["/(?:http[s]?:\/\/)?(?:www\.)?(example\.com)\/?[^\s]*/i"],
      headers: [{name: "my-header", value: "my-header-value"}],
    };
    const updatedRules = [...rules, newRule];
    setRules(updatedRules);
    chrome.storage.local.set({ rules: updatedRules });
  };

  const handleRuleUpdate = (updatedRule: RuleData) => {
    const updatedRules = rules.map(rule => rule.id === updatedRule.id ? updatedRule : rule);
    setRules(updatedRules);
    chrome.storage.local.set({ rules: updatedRules });
  };

  return (
    <div>
      {rules.map((rule, index) => (
        <Rule
          key={rule.id}
          rule={rule}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          onRuleChange={handleRuleUpdate}
        />
      ))}
      <Button onClick={addNewRule} style={{ marginTop: '10px' }}>Add New Rule</Button>
    </div>
  );
};

export default RuleList;
