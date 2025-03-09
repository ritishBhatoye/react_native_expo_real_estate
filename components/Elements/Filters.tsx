import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { categories } from '@/constants/data';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

  const handleCategoryPress = (category: string) => {
    if (selectedCategory == category) {
      setSelectedCategory('All');
      router.setParams({ filter: 'All' });
      return;
    }

    setSelectedCategory(category);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row px-4">
      {categories.map((item: any) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          className={`px-4 py-2 rounded-full  mr-4 ${selectedCategory == item.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'}`}
          key={item.id}>
          <Text
            className={`text-sm ${selectedCategory == item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
