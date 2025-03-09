import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchField from '@/components/home/SearchField';

import UserGreeting from '@/components/home/UserGreeting';
import Card from '@/components/home/Card';
import OurRecommendationSection from '@/components/home/OurRecommendationSection';
import FeaturedSection from '@/components/home/FeaturedSection';

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-2">
        <UserGreeting />
        <SearchField />
        <FeaturedSection />
        <OurRecommendationSection />

        {/* <Card isHalf={false} />
        <Card isHalf={true} /> */}
      </View>
    </SafeAreaView>
  );
}
