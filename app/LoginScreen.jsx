import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform any login validation or logic here if necessary
    navigation.navigate('GenderSelection');
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">Welcome back</Text>
        <Text className="text-text-secondary mt-2">Sign in to get active 💪</Text>
      </View>

      <View className="mt-8">
        <TextInput
          className="w-full border-b border-border text-text-primary py-2"
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
        />

        <View className="relative mt-4">
          <TextInput
            className="w-full border-b border-border text-text-primary py-2"
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
          <FontAwesome
            name="eye"
            size={20}
            color="#A9A9A9"
            style={{ position: 'absolute', right: 0, top: 10 }}
          />
        </View>

        <TouchableOpacity className="mt-4">
          <Text className="text-text-secondary">Forgot password? <Text className="text-accent">Click here</Text></Text>
        </TouchableOpacity>
      </View>

      <View className="mt-6 space-y-3">
        <TouchableOpacity className="flex-row items-center justify-center py-3 bg-gray-300 rounded-lg">
          <FontAwesome name="apple" size={20} color="#000" />
          <Text className="text-black ml-2">Sign in with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center py-3 bg-gray-300 rounded-lg">
          <FontAwesome name="google" size={20} color="#DB4437" />
          <Text className="text-black ml-2">Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="mt-8 py-3 bg-accent rounded-lg"
        onPress={handleLogin}  // Navigate to GenderSelection on press
      >
        <Text className="text-text-primary text-center font-semibold">Sign me in</Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row justify-center">
        <Text className="text-text-secondary">Don’t have an account? </Text>
        <TouchableOpacity>
          <Text className="text-accent">Create one</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
