import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/components/Panel/Navigation';
const App = () => {
  return (
    <PaperProvider>
      <Navigation/>
    </PaperProvider>
  );
};

export default App;
