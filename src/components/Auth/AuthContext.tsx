// "use client";
// import { createContext, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const accessToken = process.browser ? localStorage.getItem('access_token') : null;

//   return (
//     <AuthContext.Provider value={{ accessToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };