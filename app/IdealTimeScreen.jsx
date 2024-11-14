import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IdealTimeScreen = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState("9");
  const [amPm, setAmPm] = useState("AM");
  const [reminder, setReminder] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">What is your ideal time to stay fit?</Text>
        <Text className="text-text-secondary mt-2">What time works best for you to work out</Text>
      </View>

      {/* Time Picker */}
      <View className="mt-10 flex-row items-center justify-between">
        <Picker
          selectedValue={selectedTime}
          style={{ height: 50, width: 100, color: '#FFFFFF' }}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
        >
          {/* Add hour options */}
          {["6", "7", "8", "9", "10", "11", "12"].map((hour) => (
            <Picker.Item key={hour} label={hour} value={hour} />
          ))}
        </Picker>
        <Picker
          selectedValue={amPm}
          style={{ height: 50, width: 100, color: '#FFFFFF' }}
          onValueChange={(value) => setAmPm(value)}
        >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>
      </View>

      {/* Reminder Icon */}
      <TouchableOpacity
        className="flex-row items-center mt-4"
        onPress={() => setReminder(!reminder)}
      >
        <FontAwesome name={reminder ? 'bell' : 'bell-o'} size={24} color={reminder ? 'gold' : 'gray'} />
        <Text className="text-text-primary ml-2">I want a daily reminder to work out at this time</Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <View className="absolute bottom-0 left-0 right-0 h-24 flex-row items-center justify-between px-6">
        <TouchableOpacity
          className="bg-secondary w-14 h-14 rounded-12 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-accent w-14 h-14 rounded-12 items-center justify-center"
          onPress={() => navigation.navigate('BirthdayScreen')}
        >
          <FontAwesome name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IdealTimeScreen;
