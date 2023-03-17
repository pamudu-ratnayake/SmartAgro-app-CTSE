import React from 'react';


import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import TabNavigator from './src/navigation/TabNavigor';
//import AuthStack from './src/navigation/AuthStack';

function App() {
  return (
    <AuthProvider>
  <AppNav/>
    </AuthProvider>
  );
}

export default App;