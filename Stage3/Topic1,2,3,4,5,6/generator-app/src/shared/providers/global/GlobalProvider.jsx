import { createContext, useReducer } from 'react';

export const GlobalContext = createContext({
  darkMode: false,
  profile: null,
  handleProfileUpdate: () => {},
  toggleDarkMode: () => {},
});

const initialState = {
  darkMode: false,
  profile: {
    fullname: '',
    email: '',
    username: '',
  },
  users: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'UPDATE_PROFILE':
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const handleProfileUpdate = (newProfile) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: newProfile });
  };

  const fillUsers = (users) => {
    dispatch({ type: 'SET_USERS', payload: users });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const values = {
    darkMode: state.darkMode,
    profile: state.profile,
    handleProfileUpdate,
    toggleDarkMode,
    users: state.users,
    fillUsers,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
