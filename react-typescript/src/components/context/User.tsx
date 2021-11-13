import { useContext, useState } from "react"
import { UserContext } from "./UserContext"



export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
      userContext.setUser({
        name: 'b',
        email: 'c'
      })
  }

  const handleLogout = () => {
      userContext.setUser(null);
  }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>username : {userContext.user?.name}</div>
    <div>username : {userContext.user?.email}</div>
    </>
  )
}