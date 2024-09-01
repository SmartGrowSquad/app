import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();  
  return (
    <View>
       <Header back={() => router.back()} backgroundColor="#fff"/>
      <DefaultText>{id}</DefaultText>
    </View>
  )
}