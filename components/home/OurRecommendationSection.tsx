import { View, FlatList } from 'react-native';

import React from 'react';
import SectionHeader from '../Elements/SectionHeader';

import { cards } from '@/constants/data';
import Card from './Card';
import Filters from '../Elements/Filters';

const OurRecommendationSection = () => {
  return (
    <View className="h-full">
      <FlatList
        data={cards}
        numColumns={2}
        columnWrapperClassName="px-5 flex gap-5"
        contentContainerClassName="py-5"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={() => <Card isHalf={true} />}
        ListHeaderComponent={<Filters />}
      />
    </View>
  );
};

export default OurRecommendationSection;
