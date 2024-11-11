import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignupScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <View className='flex-1 bg-black px-6 py-8'>
      <Text className='text-2xl font-bold text-white'>
        Let's get rolling{' '}
        <Text style={{ fontSize: 24 }}>💪</Text>
      </Text>
      <Text className='text-gray-400 mt-1 mb-6'>
        Create an account to get started
      </Text>

      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        className={`bg-black text-white py-2 border-b ${focusedInput === 'firstName' ? 'border-accent' : 'border-gray-600'}`}
        onFocus={() => handleFocus('firstName')}
        onBlur={handleBlur}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        className={`bg-black text-white py-2 mt-4 border-b ${focusedInput === 'lastName' ? 'border-accent' : 'border-gray-600'}`}
        onFocus={() => handleFocus('lastName')}
        onBlur={handleBlur}
      />
      <TextInput
        placeholder="Email address"
        placeholderTextColor="gray"
        className={`bg-black text-white py-2 mt-4 border-b ${focusedInput === 'email' ? 'border-accent' : 'border-gray-600'}`}
        onFocus={() => handleFocus('email')}
        onBlur={handleBlur}
      />
      <View className='relative mt-4'>
        <TextInput
          placeholder="Create password"
          placeholderTextColor="gray"
          secureTextEntry={!passwordVisible}
          className={`bg-black text-white py-2 border-b ${focusedInput === 'password' ? 'border-accent' : 'border-gray-600'}`}
          onFocus={() => handleFocus('password')}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          className='absolute right-2 top-3'
        >
          <FontAwesome name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <Text className='text-gray-400 text-xs mt-2'>
        Password should contain
      </Text>
      <Text className='text-gray-400 text-xs'>• At least 8 characters</Text>
      <Text className='text-gray-400 text-xs'>• Upper and lower case</Text>
      <Text className='text-gray-400 text-xs mb-6'>
        • At least one number or symbol
      </Text>

      <TouchableOpacity className='bg-gray-200 rounded-lg py-3 flex-row items-center justify-center mb-4'>
        <FontAwesome name="apple" size={20} color="black" />
        <Text className='text-black ml-2'>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-gray-200 rounded-lg py-3 flex-row items-center justify-center mb-4'>
        <FontAwesome name="google" size={20} color="black" />
        <Text className='text-black ml-2'>Continue with Google</Text>
      </TouchableOpacity>

      <View className='flex-row items-center mb-4'>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text className='text-gray-400 ml-2'>
          I agree to the <Text className='text-white underline'>terms and conditions</Text> of use
        </Text>
      </View>

      <TouchableOpacity className='bg-gray-800 rounded-lg py-3'>
        <Text className='text-white text-center'>Create my account</Text>
      </TouchableOpacity>

      <Text className='text-gray-400 text-center mt-6'>
        Already have an account?{' '}
        <Text className='text-yellow-400 underline'>Log in</Text>
      </Text>
    </View>
  );
};

export default SignupScreen;
