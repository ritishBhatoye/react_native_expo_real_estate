import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import UserGreeting from '@/components/home/UserGreeting';

import SearchField from '@/components/home/SearchField';

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <UserGreeting />
        <SearchField />
      </View>
    </SafeAreaView>
  );
}
