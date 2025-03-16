import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import images from '@/constants/images';
import icons from '@/constants/icons';

interface CardsProps {
  isHalf: boolean;
}

const Card = ({ isHalf }: CardsProps) => {
  return (
    <TouchableOpacity
      className={`relative flex flex-col ${isHalf ? 'w-52 bg-white shadow-md rounded-2xl mt-4' : 'w-60 mx-2'} h-80 items-start `}>
      <Image
        source={images.japan}
        className={`${isHalf ? 'size-52 p-4' : 'size-full'}  rounded-2xl `}
      />
      {!isHalf && (
        <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
      )}

      <View className="flex flex-row items-center  bg-white/90 px-3 py-1.5 rounded-full absolute top-0 right-0 p-4 m-4 gap-2">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ">4.4</Text>
      </View>
      <View
        className={`flex  flex-col items-start  ${isHalf ? 'pl-5' : 'p-5 absolute bottom-0 left-0'} gap-1`}>
        <Text
          className={`${isHalf ? 'text-black-300 font-rubik-semibold text-base' : 'text-white font-rubik-bold text-lg'}    `}>
          Merialla Villa
        </Text>
        <Text
          className={`${isHalf ? 'text-black-100 text-xs' : 'text-white text-base'} font-rubik`}>
          New York, US
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text
            className={`${isHalf ? 'text-primary-300 text-base font-rubik-semibold ' : 'text-white text-lg font-rubik-bold'} `}>
            $12219
          </Text>
          <Image source={icons.heart} className="size-6" />
          {isHalf && <Image source={icons.heart} className="w-5 h-5 mr-5" tintColor={'#191d31'} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
