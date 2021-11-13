import * as React from 'react';

export interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export function Button (props: ButtonProps) {
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>Click</button>
    </div>
  );
}
