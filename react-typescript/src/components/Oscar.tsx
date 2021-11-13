import * as React from 'react';

export interface OscarProps {
  children: React.ReactNode
}

export function Oscar (props: OscarProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
