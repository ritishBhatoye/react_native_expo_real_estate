import { View, FlatList } from 'react-native';

import React from 'react';
import SectionHeader from '../Elements/SectionHeader';

import { cards } from '@/constants/data';
import Card from './Card';
import Filters from '../Elements/Filters';

const OurRecommendationSection = () => {
  return (
    <View className="flex flex-col gap-2 p-2">
      <SectionHeader title={'Our Recommendations'} />
      <Filters />
      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={() => <Card isHalf={true} />}
      />
    </View>
  );
};

export default OurRecommendationSection;
