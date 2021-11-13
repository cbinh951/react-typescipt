import * as React from 'react';

export interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, handleChange }: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}
