import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View  
    >
      <Text className="text-4xl text-red-600">Home</Text>
      <Link href={'/sign-in'}>Sign In</Link>
    </View>
  );
}
