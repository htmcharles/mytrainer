import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  return (
    <SafeAreaView className="flex-1 bg-background px-6">
      <View className="mt-10">
        <Text className="text-3xl font-bold text-text-primary text-center">
          You're just <Text className="text-accent">a step away</Text> from your goals
        </Text>
        <Text className="text-text-secondary mt-2">Choose a plan to get your fitness journey started</Text>
      </View>

      {/* Plan Selection */}
      <View className="mt-10">
        {/* Monthly Plan */}
        <TouchableOpacity
          onPress={() => setSelectedPlan("monthly")}
          className={`p-4 rounded-lg flex-row items-center ${selectedPlan === "monthly" ? 'border-2 border-accent shadow-white' : 'border border-border'}`}
        >
          <View className="w-4 h-4 border-2 border-text-primary rounded-full flex items-center justify-center mr-4">
            {selectedPlan === "monthly" && (
              <View className="w-2 h-2 bg-white rounded-full" />
            )}
          </View>
          <View>
            <Text className="text-text-primary text-lg">Monthly plan</Text>
            <Text className="text-text-secondary">Billed monthly | Cancel anytime</Text>
            <Text className="text-text-primary mt-2">$14.25</Text>
          </View>
        </TouchableOpacity>

        {/* Yearly Plan */}
        <TouchableOpacity
          onPress={() => setSelectedPlan("yearly")}
          className={`p-4 rounded-lg mt-5 flex-row items-center ${selectedPlan === "yearly" ? 'border-2 border-accent shadow-white' : 'border border-border'}`}
        >
          <View className="w-4 h-4 border-2 border-text-primary rounded-full flex items-center justify-center mr-4">
            {selectedPlan === "yearly" && (
              <View className="w-2 h-2 bg-white rounded-full" />
            )}
          </View>
          {/* Best Value label with negative top positioning */}
          <Text className="absolute top-[-12px] mx-[30%] bg-white font-medium px-2 py-1 text-sm rounded-8">
            Best Value
          </Text>
          <View>
            <Text className="text-text-primary text-lg">Yearly plan</Text>
            <Text className="text-text-secondary">Billed yearly | Cancel anytime</Text>
            <Text className="text-text-primary mt-2">$144</Text>
          </View>

          {/* Yearly subscription div with $12 per month */}
          <View className="absolute right-3 bottom-3 bg-secondary px-2 py-1 rounded-8">
            <Text className="text-white text-text-primary font-bold">$12 per month</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text className="text-white mt-12 text-lg text-center">Not sure Yet? A <Text className="text-accent underline"> One month trial</Text> would convince you</Text>

      {/* Continue Button */}
      <View className="absolute bottom-0 left-0 right-0 h-24 px-6 flex items-center">
        <TouchableOpacity
          className="bg-accent w-full h-14 rounded-12 items-center justify-center"
          onPress={() => console.log("Continue")}
        >
          <Text className="text-black font-medium text-lg">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
