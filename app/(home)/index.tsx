import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native"
import { Href, router } from "expo-router"
import { Body16, Title20, Title24 } from "@/components/StyledText"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import HomeHeader from "@/components/header/HomeHeader"
import { ServiceBox } from "@/components/ServiceBox"

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
        // paddingBottom: insets.bottom
      }
    ]}>
      <HomeHeader/>
      <ScrollView >
        <View style={styles.wrapper} >
          {/* 직접찾기, 배달 row  */}
          <View style={styles.mainServiceContainer}>
            <ServiceBox title="직접찾기" subtitle="어반이와 함께!" href='/service/findself' />
            <ServiceBox title="배달" subtitle="근처 어디서든!" href='/service/delivery' />
          </View>
            <ServiceBox title="내 근처 어반이 찾기" subtitle="어떤 어반이가 있을까요?" href='/search' />
            <ServiceBox title="패스코드" subtitle="내가 구매한 작물을 바로 찾을 수 있어요!" href='/passcode' />
            <ServiceBox subtitle="내가 좋아하는 작물"  />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: "#F4F5FB",
  },
  wrapper: {
    width: '100%',
    height: '100%',
    gap: 16,
    padding: 16,
    paddingTop: 20,
  },
  mainServiceContainer: {
    flexDirection: 'row',
    gap: 16
  },
})