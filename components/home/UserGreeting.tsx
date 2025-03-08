import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import images from '@/constants/images';
import icons from '@/constants/icons';
const UserGreeting = () => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="flex flex-row gap-5 items-center">
        <Image source={images.avatar} className="size-12" />
        <View className="flex flex-col">
          <Text className="text-xs font-normal text-black-100 ">Good Morning </Text>
          <Text className="font-rubik-medium text-base text-black-300 ">Ritish</Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};

export default UserGreeting;
