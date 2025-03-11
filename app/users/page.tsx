import React from 'react'

interface User {
  name: string;
  id: number;
}
const UsersPage = async () => {
  const res =  await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  console.log('users', users)
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UsersPage
