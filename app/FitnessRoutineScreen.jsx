import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessRoutineScreen = () => {

    const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('WantToAchieveScreen');
    };
    const handlePrevious = () => {
        navigation.navigate('GenderSelectionScreen');
      };
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">Do you already have a fitness routine?</Text>
        <Text className="text-text-secondary mt-2">Help us personalize your fitness journey</Text>
      </View>

      <View className="mt-10 space-y-4">
        {['Yes', 'No'].map((routine) => (
          <TouchableOpacity
            key={routine}
            onPress={() => setSelectedRoutine(routine)}
            className={`flex-row items-center justify-between px-4 py-3 rounded-lg ${
              selectedRoutine === routine ? 'border-2 border-accent bg-transparent' : 'border border-border'
            }`}
          >
            <Text className={`text-lg ${selectedRoutine === routine ? 'text-accent' : 'text-text-primary'}`}>{routine}</Text>
            {selectedRoutine === routine && (
              <FontAwesome name="check-circle" size={20} color="#FFD700" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Left Arrow Button */}
      <TouchableOpacity
        className="absolute bottom-10 left-6 bg-white w-14 h-14 rounded-full items-center justify-center"
      >
        <FontAwesome name="arrow-left" size={24} color="black" onPress={handlePrevious}/>
      </TouchableOpacity>

      {/* Right Arrow Button */}
      <TouchableOpacity
        className="absolute bottom-10 right-6 bg-accent w-14 h-14 rounded-full items-center justify-center"
      >
        <FontAwesome name="arrow-right" size={24} color="black" onPress={handleContinue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FitnessRoutineScreen;
