/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Routes />
      </NavigationContainer>
    </>
  );
};
//93ed992c444c651119c49e43e921793a
export default App;
