/**
 * My To Do List App
 * CPRG303 - Lab 5
 * Author: Nara Park
 *
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
// import { SafeAreaView } from 'react-native';
// import ToDoList from './components/ToDoList';
// import ToDoForm from './components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
