import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; // Import BlurView for the blur effect

const WantToAchieveScreen = () => {
  const navigation = useNavigation();
  const [selectedAchievements, setSelectedAchievements] = useState([]);

  const handleContinue = () => {
    navigation.navigate('MuscleSelectScreen');
  };

  const handlePrevious = () => {
    navigation.navigate('FitnessRoutineScreen');
  };

  const toggleAchievement = (achievement) => {
    if (selectedAchievements.includes(achievement)) {
      setSelectedAchievements(selectedAchievements.filter((item) => item !== achievement));
    } else {
      setSelectedAchievements([...selectedAchievements, achievement]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">What goal do you want to achieve?</Text>
        <Text className="text-text-secondary mt-2">You can choose more than one</Text>
      </View>

      <View className="mt-10 space-y-4">
        {['Weight loss', 'Weight gain', 'Muscle building', 'Strength training', 'Flexibility', 'Endurance', 'Healthy diet', 'Balance'].map((achievement) => (
          <TouchableOpacity
            key={achievement}
            onPress={() => toggleAchievement(achievement)}
            className={`flex-row items-center justify-between px-4 py-3 rounded-lg ${
              selectedAchievements.includes(achievement) ? 'border-2 border-accent bg-transparent' : 'border border-border'
            }`}
          >
            <Text className={`text-lg ${selectedAchievements.includes(achievement) ? 'text-accent' : 'text-text-primary'}`}>{achievement}</Text>
            {selectedAchievements.includes(achievement) && (
              <FontAwesome name="check-circle" size={20} color="#FFD700" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Blurred Navigation Container */}
      <BlurView intensity={10} tint="dark" className="absolute bottom-0 left-0 right-0 h-24 flex-row items-center justify-between px-6">
        {/* Left Arrow Button */}
        <TouchableOpacity
          className="bg-secondary w-14 h-14 rounded-12 items-center justify-center"
          onPress={handlePrevious}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>

        {/* Right Arrow Button */}
        <TouchableOpacity
          className="bg-accent w-14 h-14 rounded-12 items-center justify-center"
          onPress={handleContinue}
        >
          <FontAwesome name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

export default WantToAchieveScreen;
