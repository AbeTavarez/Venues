import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const users = [{id: 1, name: 'Abe', image: 'https://images.unsplash.com/photo-1645908107147-b3d0d7e37ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', venuesCount: 3}];

    
  return (
    <div>
      <h1>Users Page</h1>
      <UsersList users={users}/>
    </div>
  )
}

export default Users
