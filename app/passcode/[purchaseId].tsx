import { DefaultText } from "@/components/StyledText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function QRScreen() {
  const { purchaseId } = useLocalSearchParams();  
  return (
    <View>
      <DefaultText>QR: {purchaseId}</DefaultText>
    </View>
  )
}