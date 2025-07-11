import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

type SearchInputProps = {
  defaultValue: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ defaultValue, onChangeHandler }: SearchInputProps) {
  return (
    <TextField
      id="outlined-basic"
      defaultValue={defaultValue}
      onChange={onChangeHandler}
      label="Search by name"
      variant="outlined"
      focused
      autoFocus
    />
  );
}
