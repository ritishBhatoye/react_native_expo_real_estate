import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import UserGreeting from '@/components/home/UserGreeting';
import { Image } from 'react-native';
import SearchField from '@/components/home/SearchField';
import images from '@/constants/images';
import icons from '@/constants/icons';

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <UserGreeting />
        <SearchField />
        <TouchableOpacity className="relative flex flex-col w-60 h-80 items-start">
          <Image source={images.japan} className="size-full rounded-2xl " />
          <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />

          <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-0 right-0 p-4 m-4 gap-2">
            <Image source={icons.star} className="size-3.5" />
            <Text className="text-xs font-rubik-bold text-primary-300 ">4.4</Text>
          </View>
          <View className="flex  flex-col items-start absolute bottom-0 left-0 p-5 gap-1">
            <Text className="text-white font-rubik-bold text-lg">Merialla Villa</Text>
            <Text className="text-white text-base font-rubik">New York, US</Text>
            <View className="flex flex-row items-center justify-between w-full">
              <Text className="text-white text-lg font-rubik-bold ">$12219</Text>
              <Image source={icons.heart} className="size-6" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
