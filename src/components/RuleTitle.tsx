import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface RuleTitleProps {
  title: string;
  onTitleChange: (newTitle: string) => void;
}

const RuleTitle: React.FC<RuleTitleProps> = ({ title, onTitleChange }) => {
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
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleBlur();
      event.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        cursor: 'text',
        width: '100%',
      }}
    >
      {isEditing ? (
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={editableTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <>
          <span style={{ flexGrow: 1, userSelect: 'none' }}>{title}</span>
          <IconButton size="small" onClick={handleEditClick} sx={{ ml: 1 }}>
            <EditIcon fontSize="small" />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default RuleTitle;
