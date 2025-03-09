import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <View className="flex flex-row justify-between px-4">
      <TouchableOpacity className="">
        <Text className="text-black-300 text-xl font-rubik-semibold">{title}</Text>
      </TouchableOpacity>

      <Text className="text-base font-rubik-semibold text-primary-300">All</Text>
    </View>
  );
};

export default SectionHeader;
