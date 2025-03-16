import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Link, Redirect, router } from 'expo-router';
import { useGlobalContext } from '@/lib/global-provider';
import { login } from '@/lib/appwrite';
// import images from "@/contants/images";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href={'/'} />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      console.log('Login Success');
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6 " resizeMode="contain" />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200 ">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {'\n'}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-black-100 font-normal text-center text-base mt-2">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            onPress={() => {
              router.push('/(root)/(tabs)');
            }}
            className="bg-white  rounded-full w-full py-4 mt-5 shadow-md">
            <View className="flex flex-row items-center justify-center gap-5">
              <Image source={icons.google} className="w-7 h-7" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300">Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
