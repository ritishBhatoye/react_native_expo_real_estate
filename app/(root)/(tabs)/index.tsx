import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchField from '@/components/home/SearchField';

import UserGreeting from '@/components/home/UserGreeting';
import Card from '@/components/home/Card';

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <UserGreeting />
        <SearchField />
        <Card isHalf={false} />
        <Card isHalf={true} />
      </View>
    </SafeAreaView>
  );
}
