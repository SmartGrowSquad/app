import { DefaultText } from "@/components/StyledText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function UrbaniScreen() {
  const { service } = useLocalSearchParams();
  return (
    <View>
      <DefaultText>service name: {service}</DefaultText>
    </View>
  )
}
