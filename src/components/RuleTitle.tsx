import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon

interface RuleTitleProps {
  title: string;
  id: number;
  onTitleChange: (newTitle: string) => void;
  onRuleDelete: (ruleId: number) => void;
}

const RuleTitle: React.FC<RuleTitleProps> = ({ title, id, onTitleChange, onRuleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const handleBlur = () => {
    setIsEditing(false);
    onTitleChange(editableTitle);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(event.target.value);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation(); // Prevent any parent handler from being executed
    setIsEditing(true);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    onRuleDelete(id);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {isEditing ? (
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={editableTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleBlur();
              event.preventDefault();
            }
          }}
          autoFocus
        />
      ) : (
        <>
          <span style={{ flexGrow: 1, userSelect: 'none' }}>{title}</span>
          <IconButton size="small" onClick={handleEditClick} sx={{ ml: 1 }}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={handleDeleteClick} sx={{ ml: 1 }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default RuleTitle;
