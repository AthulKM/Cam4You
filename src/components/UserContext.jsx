import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
localStorage.setItem('users', JSON.stringify([{
  username: 'user',
  password:'user'
}]))

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const loginUser = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser, removeUser, loginUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  );
};
