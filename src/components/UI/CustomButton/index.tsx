import { Button } from '@mui/material';

type colorType = 'primary' | 'secondary' | 'info' | 'error' | 'inherit' | 'success';
type variantType = 'outlined' | 'contained' | 'text';
type sizeType = 'large' | 'small' | 'medium';
type buttonType = 'submit' | 'button';

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: colorType;
  startIcon?: any;
  endIcon?: any;
  variant?: variantType;
  fullWidth?: boolean;
  size?: sizeType;
  type?: buttonType;
  children?: any;
  href?: string;
  theme?: 'default';
  className?: string;
}

const CustomButton = (props: PrimaryButtonProps) => {
  const {
    text = '',
    variant = 'contained',
    size,
    type,
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    onClick,
    fullWidth,
    children,
    href,
    className,
  } = props;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      size={size}
      disabled={disabled || loading}
      href={href}
      {...props}
      className={className}
    >
      {loading ? <span /> : text || children}
    </Button>
  );
};

export default CustomButton;
