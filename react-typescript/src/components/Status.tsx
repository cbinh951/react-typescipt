import * as React from 'react';

export interface StatusProps {
  status: 'loading' | 'success' | 'error'
}

export function Status (props: StatusProps) {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'success'
  } else {
    message = 'error'
  }

  return (
    <div>
        {message}    
    </div>
  );
}
