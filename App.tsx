import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Page from './src/Page';

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <Page />
        </SafeAreaProvider>
    );
};

export default App;
