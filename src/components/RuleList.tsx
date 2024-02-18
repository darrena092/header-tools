import React, { useState } from 'react';
import Rule from './Rule';

interface RuleData {
  id: number;
  title: string;
}

interface RuleListProps {
  rules: RuleData[];
}

const RuleList: React.FC<RuleListProps> = ({ rules }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {rules.map((rule) => (
        <Rule
          key={rule.id}
          title={rule.title}
          expanded={true}
          onToggle={() => console.log(`Toggled`)} // Implement toggle logic
        />
      ))}
    </div>
  );
};

export default RuleList;
