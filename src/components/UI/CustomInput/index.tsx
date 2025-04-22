import * as React from 'react';
import TextField from '@mui/material/TextField';
import { toEnglishNumber } from '@/utils/validation';
import { InputAdornment } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

type inputModeType = 'tel' | 'numeric' | 'text' | 'email' | undefined;
type variantType = 'outlined' | 'filled' | 'standard';
export type typeTextField = 'text' | 'password' | 'email' | 'numeric';

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value?: any;
  error?: boolean;
  variant?: variantType;
  maxLength?: number;
  helperText?: string;
  type?: typeTextField;
  inputMode?: inputModeType;
  disabled?: boolean;
  hidden?: boolean;
  onChangeHandler?: (value: any) => void;
  onEnter?: any;
  rows?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  autoFocus?: boolean;
  multiline?: boolean;
  ignoreNumeric?: boolean;
  readOnly?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = (props) => {
  const {
    label = '',
    variant = 'outlined',
    placeholder = '',
    value,
    error = false,
    helperText = '',
    type = 'text',
    maxLength = 100,
    inputMode,
    disabled,
    hidden = false,
    multiline = false,
    readOnly = false,
    rows = 1,
    onEnter,
    startIcon,
    endIcon,
    autoFocus = false,
    ignoreNumeric = false,
    onChangeHandler,
  } = props;

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.target.value;

    if (inputMode === 'numeric' && /\D/g.test(toEnglishNumber(value)) && !ignoreNumeric) return;
    onChangeHandler?.(inputMode === 'numeric' ? toEnglishNumber(value) : value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      onEnter?.();
    }
  };

  return (
    <TextField
      id='outlined-basic'
      variant={variant}
      placeholder={placeholder}
      fullWidth
      label={label}
      value={value}
      error={error}
      rows={rows}
      onChange={onChange}
      helperText={helperText}
      type={type}
      hidden={hidden}
      autoFocus={autoFocus}
      multiline={multiline}
      inputMode={inputMode}
      autoComplete='off'
      onKeyDown={handleKeyDown}
      disabled={disabled}
      slotProps={{
        input: {
          inputMode,
          readOnly: readOnly,
          sx: { letterSpacing: inputMode === 'numeric' ? '2px' : 'normal' },
          startAdornment: startIcon ? (
            <InputAdornment position='start' sx={{ marginLeft: '-0.5rem' }}>
              {startIcon}
            </InputAdornment>
          ) : null,
          endAdornment: endIcon ? (
            <InputAdornment position='start' sx={{ marginLeft: '0.5rem' }}>
              {endIcon}
            </InputAdornment>
          ) : null,
        },
      }}
      inputProps={{
        inputMode,
        maxLength: maxLength,
        autoComplete: 'new-password',
        form: {
          autocomplete: 'off',
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;
