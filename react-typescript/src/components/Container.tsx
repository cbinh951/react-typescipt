import * as React from 'react';

export interface ContainerProps {
  styles: React.CSSProperties
}

export function Container (props: ContainerProps) {
  return (
    <div style={props.styles}>
      text
    </div>
  );
}
