'use client';

import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  color: ButtonProps['color'];
  type?: ButtonProps['type'];
  startIcon?: ButtonProps['startIcon'];
}

const PrimaryButton = ({ label, onClick, color, type }: PrimaryButtonProps) => {
  return (
    <Button onClick={onClick} variant="contained" size="large" color={color} type={type}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
