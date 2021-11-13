import * as React from 'react';

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

export function Greet (props: GreetProps) {
  const {messageCount = 0} = props;
  return (
    <div>
      {
        props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount}` : `Welcome Guest`
      }
      
    </div>
  );
}
