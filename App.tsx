import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Page from './src/Page';

const App = () => {
    return (
        <SafeAreaProvider>
            <Page />
        </SafeAreaProvider>
    );
};

export default App;
