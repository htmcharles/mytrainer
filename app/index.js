import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './onboarding/SignUpScreen';
import LoginScreen from './onboarding/LoginScreen';
import GenderSelectionScreen from './onboarding/GenderSelectionScreen';
import FitnessRoutineScreen from './onboarding/FitnessRoutineScreen';
import WantToAchieveScreen from './onboarding/WantToAchieveScreen';
import MuscleSelectScreen from './onboarding/MuscleSelectScreen';
import IdealTimeScreen from './onboarding/IdealTimeScreen';
import BirthdayScreen from './onboarding/BirthdayScreen';
import SubscriptionScreen from './onboarding/SubscriptionScreen';
// import HomeScreen from './HomeScreen';  // Import the HomeScreen
import '../global.css';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FitnessRoutineScreen" component={FitnessRoutineScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WantToAchieveScreen" component={WantToAchieveScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MuscleSelectScreen" component={MuscleSelectScreen} options={{ headerShown: false }} />
      <Stack.Screen name="IdealTimeScreen" component={IdealTimeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> Add HomeScreen */}
    </Stack.Navigator>
  );
};

export default App;
