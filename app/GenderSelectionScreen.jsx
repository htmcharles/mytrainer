import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GenderSelectionScreen = () => {
    const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('FitnessRoutineScreen');
  };

  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">What do you identify as?</Text>
        <Text className="text-text-secondary mt-2">Help us personalize your fitness journey</Text>
      </View>

      <View className="mt-10 space-y-4">
        {['Male', 'Female', 'Others'].map((gender) => (
          <TouchableOpacity
            key={gender}
            onPress={() => setSelectedGender(gender)}
            className={`flex-row items-center justify-between px-4 py-3 rounded-lg ${
              selectedGender === gender ? 'border-2 border-accent bg-transparent' : 'border border-border'
            }`}
          >
            <Text className={`text-lg ${selectedGender === gender ? 'text-accent' : 'text-text-primary'}`}>{gender}</Text>
            {selectedGender === gender && (
              <FontAwesome name="check-circle" size={20} color="#FFD700" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        className="absolute bottom-10 right-6 bg-accent w-14 h-14 rounded-12 items-center justify-center"
      >
        <FontAwesome name="arrow-right" size={24} color="#000" onPress={handleContinue}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GenderSelectionScreen;
