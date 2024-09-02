import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function QRScreen() {
  const { purchaseId } = useLocalSearchParams();  
  return (
    <View>
      <Header cancel={() => router.back() }/>
      <DefaultText>QR: {purchaseId}</DefaultText>
    </View>
  )
}