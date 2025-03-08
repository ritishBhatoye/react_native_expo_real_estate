import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Link, router, useLocalSearchParams, usePathname } from 'expo-router';
import { useDebouncedCallback } from 'use-debounce';
import { Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import icons from '@/constants/icons';

const SearchField = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);
  const debounceSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500,
  );
  const handleSearch = (text: string) => {
    setSearch(text);
    debounceSearch(text);
  };
  return (
    <View className="border-[1px] py-2 border-primary-100 bg-accent-100 flex flex-row justify-between rounded-lg w-full px-4 mt-5">
      <View className="flex flex-1 justify-start z-50 flex-row gap-4 items-center">
        <Image source={icons.search} className="size-6" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search Something"
          className="text-xs text-black-100 font-rubik "
        />
      </View>
      <Image source={icons.filter} className="size-6" />
    </View>
  );
};

export default SearchField;
