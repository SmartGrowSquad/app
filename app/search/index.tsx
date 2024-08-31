import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { ScrollView, View } from "react-native";

export function SearchScreen() {
  return (
    <View>
      <Header title="Search"/>
      <ScrollView>
        <DefaultText>Search</DefaultText>
      </ScrollView>
    </View>
  )
}
