import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IdealTimeScreen = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState("9");
  const [amPm, setAmPm] = useState("AM");
  const [reminder, setReminder] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [amPmModalVisible, setAmPmModalVisible] = useState(false);

  const hours = ["6", "7", "8", "9", "10", "11", "12"];
  const amPmOptions = ["AM", "PM"];

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">What is your ideal time to stay fit?</Text>
        <Text className="text-text-secondary mt-2">What time works best for you to work out</Text>
      </View>

      {/* Time Selector */}
      <View className="mt-10 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => setTimeModalVisible(true)} className="bg-secondary p-2 rounded">
          <Text className="text-text-primary">{selectedTime}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAmPmModalVisible(true)} className="bg-secondary p-2 rounded">
          <Text className="text-text-primary">{amPm}</Text>
        </TouchableOpacity>
      </View>

      {/* Reminder Icon */}
      <TouchableOpacity
        className="flex-row items-center mt-4"
        onPress={() => setReminder(!reminder)}
      >
        <FontAwesome name={reminder ? 'bell' : 'bell-o'} size={24} color={reminder ? 'gold' : 'gray'} />
        <Text className="text-text-primary ml-2">I want a daily reminder to work out at this time</Text>
      </TouchableOpacity>

      {/* Modals for Time Selection */}
      <Modal transparent={true} visible={timeModalVisible} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-background p-4 rounded">
            <FlatList
              data={hours}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { setSelectedTime(item); setTimeModalVisible(false); }}>
                  <Text className="text-text-primary text-xl p-2">{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>

      <Modal transparent={true} visible={amPmModalVisible} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-background p-4 rounded">
            <FlatList
              data={amPmOptions}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { setAmPm(item); setAmPmModalVisible(false); }}>
                  <Text className="text-text-primary text-xl p-2">{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>

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
