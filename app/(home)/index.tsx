import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native"
import { Href, router } from "expo-router"
import { Body16, Title20, Title24 } from "@/components/StyledText"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import HomeHeader from "@/components/header/HomeHeader"

interface ServiceBoxProps {
  title?: string,
  subtitle: string,
  href?: Href<string> 
}

const serviceBox = (props: ServiceBoxProps) => 
  <Pressable style={styles.serviceBoxContainer} onPress={() => {props.href && router.navigate(props.href)}}>
    <View style={styles.serviceBoxWrapper}>
      <Title20>{props.title}</Title20>
      <Body16>{props.subtitle}</Body16>
    </View>
  </Pressable>
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
            { serviceBox({ title: "직접찾기", subtitle: "어반이와 함께!", href: 'urbani/findself' }) }
            { serviceBox({ title: "배달", subtitle: "근처 어디서든!", href: 'urbani/delivery' }) }
          </View>
            { serviceBox({ title: "내 근처 어반이 찾기", subtitle: "어떤 어반이가 있을까요?", href: '/search' }) }
            { serviceBox({ title: "패스코드", subtitle: "내가 구매한 작물을 바로 찾을 수 있어요!", href: '/passcode' }) }
            { serviceBox({subtitle: "내가 좋아하는 작물"}) }
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
  serviceBoxContainer: {
    height: 204,
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  serviceBoxWrapper: {
    height: '100%',
  }
})