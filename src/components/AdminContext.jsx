import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);

  const addAdmin = (admin) => {
    setAdmins([...admins, admin]);
  };

  const updateAdmin = (updatedAdmin) => {
    setAdmins(admins.map(admin =>
      admin.id === updatedAdmin.id ? updatedAdmin : admin
    ));
  };

  const removeAdmin = (adminId) => {
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  return (
    <AdminContext.Provider value={{ admins, addAdmin, updateAdmin, removeAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};