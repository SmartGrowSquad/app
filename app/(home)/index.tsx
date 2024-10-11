import { Pressable, Image, View, StyleSheet, ScrollView } from "react-native"
import { Href, router } from "expo-router"
import { Body16, DefaultText, Title20, Title24 } from "@/components/StyledText"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import HomeHeader from "@/components/header/HomeHeader"
import { ServiceBox } from "@/components/ServiceBox"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const user = useSelector((state: RootState) => state.user, );
  const auth = useSelector((state: RootState) => state.auth );
  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
      }
    ]}>
      <HomeHeader/>
      <ScrollView >
        <View style={styles.wrapper} >

          <View style={styles.mainServiceContainer}>
            <ServiceBox title="직접찾기" subtitle="어반이와 함께!" href='/service/findself' >
              <View style={styles.imageContainer}>
                <Image source={ require("../../assets/images/findself_3x.png") } style={{ width: '100%',height: 60, resizeMode: 'contain'}}/>
              </View>
            </ServiceBox>

            <ServiceBox title="배달" subtitle="근처 어디서든!" href='/service/delivery'>
              <View style={styles.imageContainer}>
                <Image source={ require("../../assets/images/delivery_3x.png") } style={{ width: '100%',height: 60, resizeMode: 'contain'}}/>
              </View>
            </ServiceBox>
          </View>

          <ServiceBox title="내 근처 어반이 찾기" subtitle="어떤 어반이가 있을까요?" href='/search' direction="row">
            <View style={styles.imageContainer}>
              <Image source={ require("../../assets/images/searchUrbani.png") } style={{ width: 160, height:140, resizeMode: 'contain'}}/>
            </View>
          </ServiceBox>

          <ServiceBox title="패스코드" subtitle="내가 구매한 작물을 바로 찾을 수 있어요!" option="list">
            {/* 로그인 상태가 아닌 경우 */}
            <View style={styles.ListServiceBoxContainer}>
              {
                !auth.authenticated ?
                  <DefaultText>로그인이 필요합니다.</DefaultText>
                :
                  <DefaultText>패스코드가 없습니다.</DefaultText>
              }
            </View>

            {/* 주문 내역이 없을 경우 */}
          </ServiceBox>

          <ServiceBox subtitle="내가 좋아하는 작물" option="list">
            {/* 로그인 상태가 아닌 경우 */}
            <View style={styles.ListServiceBoxContainer}>
              {
                !auth.authenticated ?
                  <DefaultText>로그인이 필요합니다.</DefaultText>
                :
                  <DefaultText>좋아하는 작물이 없습니다.</DefaultText>
              }
            </View>
            {/* 좋아하는 작물이 없을 경우 */}
          </ServiceBox>
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
    paddingBottom: 100,
  },
  mainServiceContainer: {
    flexDirection: 'row',
    gap: 16
  },
  ListServiceBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
  }
})