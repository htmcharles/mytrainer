import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function SubscriptionScreen() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCheckboxChange = (plan) => {
    setSelectedPlan(plan === selectedPlan ? null : plan);
  };

  return (
    <View className="flex-1 bg-background px-4 py-8">
      {/* Header */}
      <Text className="text-2xl font-bold text-center text-text-primary">
        You're just <Text className="text-accent">a step away</Text>
      </Text>
      <Text className="text-2xl font-bold text-center text-text-primary mb-4">
        from your goals
      </Text>
      <Text className="text-center text-text-secondary mb-8">
        Choose a plan to get your fitness journey started
      </Text>

      {/* Monthly Plan */}
      <TouchableOpacity
        className="bg-secondary rounded-12 p-4 mb-4 flex-row items-center justify-between"
        onPress={() => handleCheckboxChange('monthly')}
      >
        {/* Checkbox on the left */}
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={selectedPlan === 'monthly'}
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            marginRight: 16, // Space between checkbox and text
          }}
          checkedColor="white" // White color when checked
        />
        <View>
          <Text className="text-text-primary font-semibold">Monthly plan</Text>
          <Text className="text-text-secondary">Billed monthly | Cancel anytime</Text>
          <Text className="text-text-primary font-bold text-lg mt-2">$14.25</Text>
        </View>
      </TouchableOpacity>

      {/* Yearly Plan */}
      <TouchableOpacity
        className="bg-secondary rounded-12 p-4 mb-4 flex-row items-center justify-between relative border border-accent"
        onPress={() => handleCheckboxChange('yearly')}
      >
        {/* Checkbox on the left */}
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={selectedPlan === 'yearly'}
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            marginRight: 16, // Space between checkbox and text
          }}
          checkedColor="white" // White color when checked
        />
        <View>
          <Text className="text-text-primary font-semibold">Yearly plan</Text>
          <Text className="text-text-secondary">Billed yearly | Cancel anytime</Text>
          <Text className="text-text-primary font-bold text-lg mt-2">$144</Text>
        </View>
        <View className="absolute top-0 -mt-4 px-2 py-1 bg-white rounded-8 self-center">
          <Text className="text-xs font-bold text-secondary">Best Value</Text>
        </View>
        <View className="absolute bottom-4 right-4 bg-accent px-2 py-1 rounded-8">
          <Text className="text-xs text-secondary">$12 per month</Text>
        </View>
      </TouchableOpacity>

      {/* Free Trial Text */}
      <Text className="text-center text-text-secondary mt-4">
        Not sure yet? <Text className="text-accent">A one month free trial</Text> would convince you
      </Text>

      {/* Continue Button */}
      <TouchableOpacity className="bg-accent mt-6 rounded-12 py-4">
        <Text className="text-center text-secondary font-bold">Continue</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text className="text-center text-text-secondary mt-4">
        By continuing, you agree to the <Text className="text-text-primary">terms and conditions</Text>
      </Text>
    </View>
  );
}
