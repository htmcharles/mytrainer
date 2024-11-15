import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BirthdayScreen = () => {
  const navigation = useNavigation();
  const [birthday, setBirthday] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString('en-GB'); // Format as dd/mm/yyyy
    setBirthday(formattedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary">When is your birthday?</Text>
        <Text className="text-text-secondary mt-2">
          Of course, we do care and want to personalize your journey more
        </Text>
      </View>

      {/* Birthday Input with Calendar Icon */}
      <View className="flex-row items-center mt-10 border-b border-border py-2">
        <TextInput
          placeholder="dd/mm/yyyy"
          placeholderTextColor="#A9A9A9"
          value={birthday}
          onChangeText={setBirthday}
          className="flex-1 text-text-primary text-lg"
          editable={false} // Disable manual input to use date picker
        />
        <TouchableOpacity onPress={showDatePicker}>
          <FontAwesome name="calendar" size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

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
          onPress={() => navigation.navigate('SubscriptionScreen')}
        >
          <FontAwesome name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BirthdayScreen;
