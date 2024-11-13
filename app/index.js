import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import GenderSelectionScreen from './GenderSelectionScreen';
import FitnessRoutineScreen from './FitnessRoutineScreen';
import WantToAchieveScreen from './WantToAchieveScreen';
import '../global.css'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FitnessRoutineSelection" component={FitnessRoutineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WantToAchieveSelection" component={WantToAchieveScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
  );
};

export default App;
