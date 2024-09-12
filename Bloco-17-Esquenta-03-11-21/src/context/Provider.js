import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

function Provider({ children }) {
  const [users, setUsers] = useState('');
  const contextValue = {
    users,
    setUsers
  };

  async function fetchUsers() {
    const response = await axios.get('http://localhost:8080/');
    setUsers(response.data)
  } 

  useEffect(() => {
    fetchUsers();
  })

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
