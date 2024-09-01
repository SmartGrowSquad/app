import Header from "@/components/header/Header";
import { DefaultText, Title20 } from "@/components/StyledText";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

export default function PasscodeScreen() {
  return (
    <View>
      <Header back={() => router.back()} title="패스코드" backgroundColor="#fff"/>
      <ScrollView>
        
        <Title20>준비완료</Title20>
          <View>
            <Pressable onPress={() => router.navigate('/passcode/1234')}>
              <DefaultText>1234</DefaultText>
            </Pressable>
          </View> 
        <Title20>준비중</Title20>
        <View></View>
      </ScrollView>
    </View>
  )
}

