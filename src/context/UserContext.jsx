import React, { createContext, useState, useEffect } from 'react';
import api from '../api/config.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // In development, use mock user if server is not running
        if (import.meta.env.MODE === 'development') {
          setUser({
            id: 1,
            username: 'DemoUser',
            email: 'demo@example.com'
          });
          setLoading(false);
          return;
        }

        const response = await api.get('/auth/current-user');
        setUser(response.data);
      } catch (error) {
        console.log('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

