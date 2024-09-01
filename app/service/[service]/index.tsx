import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { Href, router, useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

export default function ServiceLayout() {
  const { service } = useLocalSearchParams();
  
  const title = service === 'findself' ? '직접찾기' : '배달';
  
  return (
    <View>
      <Header back={() => router.back()} title={title} backgroundColor="#fff"/>
      <ScrollView>
        {/* addreadd */}
        {/* category */}
        {/* list */}
        <Pressable onPress={() => router.navigate(`service/detail/1` as Href<string>)}>  
          <DefaultText>detail 1</DefaultText>
        </Pressable>
      </ScrollView>
    </View>
  )
}

