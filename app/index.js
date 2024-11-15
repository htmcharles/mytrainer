import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import GenderSelectionScreen from './GenderSelectionScreen';
import FitnessRoutineScreen from './FitnessRoutineScreen';
import WantToAchieveScreen from './WantToAchieveScreen';
import MuscleSelectScreen from './MuscleSelectScreen';
import IdealTimeScreen from './IdealTimeScreen';
import BirthdayScreen from './BirthdayScreen';
import SubscriptionScreen from './SubscriptionScreen';
import '../global.css'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FitnessRoutine" component={FitnessRoutineScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WantToAchieve" component={WantToAchieveScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MuscleSelection" component={MuscleSelectScreen} options={{ headerShown: false }} />
      <Stack.Screen name="IdealTime" component={IdealTimeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Birthday" component={BirthdayScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default App;
