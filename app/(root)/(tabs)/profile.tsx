import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import icons from '@/constants/icons';
import images from '@/constants/images';
import ListTile from '@/components/ListTile';
import { settings } from '@/constants/data';

const Profile = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="font-rubik-semibold text-xl ">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex flex-row justify-center">
          <View className="flex flex-col items-center">
            <Image source={images.avatar} className="size-44 relative rounded-full" />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-semibold text-">Ritish Bhatoye</Text>
          </View>
        </View>
        <View className="border-t-[1px]   border-primary-300/10 mt-5">
          {settings.slice(0, 2).map((settingsItem: any) => (
            <ListTile key={settingsItem.id} title={settingsItem.title} icon={settingsItem.icon} />
          ))}
        </View>
        <View className="border-t-[1px]  border-primary-300/10 mt-5">
          {settings.slice(2, settings.length).map((settingsItem: any) => (
            <ListTile key={settingsItem.id} title={settingsItem.title} icon={settingsItem.icon} />
          ))}
        </View>
        <ListTile typoClassName="text-danger" title={'Logout'} icon={icons.logout} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
