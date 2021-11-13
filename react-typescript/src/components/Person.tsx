import * as React from 'react';
import { PersonProps } from './Person.type';

export function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}
