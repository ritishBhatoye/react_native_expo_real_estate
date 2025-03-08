import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import icons from '@/constants/icons';
import images from '@/constants/images';
import UserGreeting from '@/components/home/UserGreeting';
import { TextInput } from 'react-native-gesture-handler';
import { useDebouncedCallback } from 'use-debounce';
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
