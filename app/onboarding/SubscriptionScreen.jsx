import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';
// import { useNavigation } from '@react-navigation/native';

export default function SubscriptionScreen() {
  const [selectedPlan, setSelectedPlan] = useState(null);
//   const navigation = useNavigation();

  const handleCheckboxChange = (plan) => {
    setSelectedPlan(plan === selectedPlan ? null : plan);
  };

//   const handleContinue = () => {
//     // Navigate to the HomeScreen when "Continue" is pressed
//     if (selectedPlan) {
//       navigation.navigate('Home');
//     } else {
//       alert("Please select a plan to continue.");
//     }
//   };

  return (
    <View className="flex-1 bg-background px-4 py-8">
      {/* Header */}
      <Text className="text-4xl font-bold text-center text-text-primary mt-10 ">
        You're just <Text className="text-accent">a step away</Text>
      </Text>
      <Text className="text-2xl font-bold text-center text-text-primary mb-8">
        from your goals
      </Text>
      <Text className="text-center text-text-secondary mb-8">
        Choose a plan to get your fitness journey started
      </Text>

      {/* Monthly Plan */}
      <TouchableOpacity
        className={`bg-secondary rounded-12 p-6 my-8 flex-row items-center justify-between relative ${selectedPlan === 'monthly' ? 'border border-accent' : ''}`}
        onPress={() => handleCheckboxChange('monthly')}
      >
        <CheckBox
          size={20}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={selectedPlan === 'monthly'}
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          checkedColor="white"
        />
        <View className='flex-1'>
          <Text className="text-text-primary font-semibold">Monthly plan</Text>
          <Text className="text-text-secondary">Billed monthly | Cancel anytime</Text>
          <Text className="text-text-primary font-bold text-lg mt-2">$14.25</Text>
        </View>
      </TouchableOpacity>

      {/* Yearly Plan */}
      <TouchableOpacity
        className={`bg-secondary rounded-12 p-6 mb-8 flex-row items-center justify-between relative ${selectedPlan === 'yearly' ? 'border border-accent' : 'border border-transparent'}`}
        onPress={() => handleCheckboxChange('yearly')}
      >
        <CheckBox
          size={20}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={selectedPlan === 'yearly'}
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          checkedColor="white"
        />
        <View className='flex-1'>
          <Text className="text-text-primary font-semibold">Yearly plan</Text>
          <Text className="text-text-secondary">Billed yearly | Cancel anytime</Text>
          <Text className="text-text-primary font-bold text-lg mt-2">$144</Text>
        </View>
        <View className="absolute top-0 -mt-4 px-4 py-2 bg-white rounded-8 mx-[45%] self-center">
          <Text className="text-xs font-bold text-secondary">Best Value</Text>
        </View>
        <View className="absolute bottom-4 right-4 bg-background px-4 py-2 rounded-8">
          <Text className="text-xs text-white text-lg">$12 per month</Text>
        </View>
      </TouchableOpacity>

      {/* Free Trial Text */}
      <Text className="text-center text-text-secondary mt-4 mb-10">
        Not sure yet? <Text className="text-accent">A one month free trial</Text> would convince you
      </Text>

      {/* Continue Button */}
      <TouchableOpacity onPress={handleContinue} className="bg-accent mt-10 rounded-12 py-4">
        <Text className="text-center text-secondary font-bold">Continue</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text className="text-center text-text-secondary mt-4">
        By continuing, you agree to the <Text className="text-text-primary">terms and conditions</Text>
      </Text>
    </View>
  );
}
