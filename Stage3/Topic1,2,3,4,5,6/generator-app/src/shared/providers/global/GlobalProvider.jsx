import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    age: 30,
    email: '',
  });

  const values = {
    isShow: false,
    profile,
    setProfile,
    user: {
      name: 'John Doe',
    },
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
