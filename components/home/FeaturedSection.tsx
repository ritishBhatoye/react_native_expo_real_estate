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
        className="px-2"
        data={cards}
        horizontal
        contentContainerClassName=""
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={() => <Card isHalf={false} />}
      />
    </View>
  );
};

export default FeaturedSection;
