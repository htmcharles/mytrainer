import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur'; // Import BlurView for the blur effect

const MuscleSelectScreen = () => {
  const navigation = useNavigation();

  // State to handle multiple muscle selection and tab selection
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [activeTab, setActiveTab] = useState('Front'); // Default tab is 'Front'

  // Toggle muscle selection
  const toggleMuscle = (muscle) => {
    setSelectedMuscles((prev) =>
      prev.includes(muscle)
        ? prev.filter((item) => item !== muscle) // Remove muscle if already selected
        : [...prev, muscle] // Add muscle if not selected
    );
  };

  // Data for muscles based on tabs
  const muscles = {
    Front: ['Shoulder', 'Chest', 'Triceps', 'Biceps', 'Legs'],
    Back: ['Glutes', 'Abs', 'Balance']
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">What muscles do you want to target?</Text>
        <Text className="text-text-secondary mt-2">Select target muscles</Text>
      </View>

      {/* Tab Selection */}
      <View className="flex-row mt-6 bg-secondary rounded-12 w-7/12 px-2">
      {['Front', 'Back'].map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          className={`flex-1 items-center py-2 ${
            activeTab === tab ? 'bg-accent' : ''
          }`}
        >
          <Text className={`text-lg font-medium ${activeTab === tab ? 'text-black' : 'text-white'}`}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

      {/* Muscle Selection */}
      <View className="mt-10 space-y-4">
        {muscles[activeTab].map((muscle) => (
          <TouchableOpacity
            key={muscle}
            onPress={() => toggleMuscle(muscle)}
            className={`flex-row items-center justify-between px-4 py-3 rounded-lg mb-6 ${
              selectedMuscles.includes(muscle) ? 'border-2 border-accent bg-transparent' : 'border border-border'
            }`}
          >
            <Text className={`text-lg ${selectedMuscles.includes(muscle) ? 'text-accent' : 'text-text-primary'}`}>
              {muscle}
            </Text>
            {selectedMuscles.includes(muscle) && (
              <FontAwesome name="check-circle" size={20} color="#FFD700" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <BlurView intensity={10} tint="dark" className="absolute bottom-0 left-0 right-0 h-24 flex-row items-center justify-between px-6">
        {/* Left Arrow Button */}
        <TouchableOpacity
          className="bg-secondary w-14 h-14 rounded-12 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="white"
          onPress={() => navigation.navigate('WantToAchieveScreen')}/>
        </TouchableOpacity>

        {/* Right Arrow Button */}
        <TouchableOpacity
          className="bg-accent w-14 h-14 rounded-12 items-center justify-center"
        >
          <FontAwesome name="arrow-right" size={24} color="black"
          onPress={() => navigation.navigate('IdealTimeScreen')}/>
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

export default MuscleSelectScreen;
