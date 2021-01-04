import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const RooStack = createStackNavigator();

const RootStackScreen = () => (
  <RooStack.Navigator>
    <RooStack.Screen
      name="home"
      component={Home}
      options={{title: 'WeatherOr'}}
    />
  </RooStack.Navigator>
);

export default function Routes() {
  return <RootStackScreen />;
}
