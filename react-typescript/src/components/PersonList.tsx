import * as React from 'react';
import { Name } from './Person.type';

export interface PersonListProps {
  names: Name[];
}

export function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => (
        <>
          {name.first} {name.last}
        </>
      ))}
    </div>
  );
}
