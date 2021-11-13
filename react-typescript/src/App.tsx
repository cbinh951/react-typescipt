import React from 'react';
import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { Status } from './components/Status';
import { Toast } from './components/templateliteral/Toast';

function App() {
  const personName = {
    first: 'b',
    last: 'c',
  };

  const nameList = [
    {
      first: 'b',
      last: 'c',
    },
    {
      first: 'b',
      last: 'c',
    },
  ];
  return (
    <div className="App">
      <Greet name="a" isLoggedIn />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>hi heading</Heading>
      <Oscar>
        <Heading>hello</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log('hello', event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px', padding: '1rem' }} />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Private isLoggedIn component={Profile} />

      <List
        items={[
          {
            id: 1,
            first: 'a',
            last: 'b',
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log('test')}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
