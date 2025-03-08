import { View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import icons from '@/constants/icons';

interface ListTileProps {
  title: string;
  icon: ImageSourcePropType;
  showArrow?: boolean;
  typoClassName?: string;
}

const ListTile = ({ title, icon, showArrow, typoClassName }: ListTileProps) => {
  return (
    <TouchableOpacity className="flex flex-row p-2 my-2 items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Image source={icon} className="size-7" />
        <Text className={`text-black-300 font-rubik-medium text-lg ${typoClassName}`}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

export default ListTile;
