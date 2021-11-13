import { useState } from "react"

type AuthUser = {
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'test',
      email: 'a'
    })
  }


  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <div>{user.email}</div>
    </>
  )
}