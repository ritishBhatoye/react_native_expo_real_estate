import { View, FlatList } from 'react-native';

import React from 'react';
import SectionHeader from '../Elements/SectionHeader';

import { cards } from '@/constants/data';
import Card from './Card';

const FeaturedSection = () => {
  return (
    <View className="flex flex-col gap-2 p-2">
      <SectionHeader title={'Featured'} />
      <FlatList
        className="px-4"
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={() => <Card isHalf={false} />}
      />
    </View>
  );
};

export default FeaturedSection;
