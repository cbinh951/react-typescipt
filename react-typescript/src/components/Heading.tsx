import * as React from 'react';

export interface HeadingProps {
  children: string
}

export function Heading (props: HeadingProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
