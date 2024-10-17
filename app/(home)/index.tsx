import { Pressable, Image, View, StyleSheet, ScrollView, RefreshControl } from "react-native"
import { Href, router } from "expo-router"
import { Body16, DefaultText, Title20, Title24 } from "@/components/StyledText"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import HomeHeader from "@/components/header/HomeHeader"
import { ServiceBox } from "@/components/ServiceBox"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { useCallback, useState } from "react"

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const user = useSelector((state: RootState) => state.user, );
  const auth = useSelector((state: RootState) => state.auth );
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
      }
    ]}>
      <HomeHeader/>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
        }
      >
        <View style={styles.wrapper} >

          <View style={styles.mainServiceContainer}>
            <ServiceBox title="직접찾기" subtitle="작물 픽업 구매" href='/service/findself' >
              <View style={styles.imageContainer}>
                <Image source={ require("../../assets/images/findself_3x.png") } style={{ width: '100%',height: 60, resizeMode: 'contain'}}/>
              </View>
            </ServiceBox>

            <ServiceBox title="배달" subtitle="어떤 작물이든 구매" href='/service/delivery'>
              <View style={styles.imageContainer}>
                <Image source={ require("../../assets/images/delivery_3x.png") } style={{ width: '100%',height: 60, resizeMode: 'contain'}}/>
              </View>
            </ServiceBox>
          </View>

          <ServiceBox title="내 근처 어반이 찾기" subtitle="근처 어반이 검색" href='/search' direction="row">
            <View style={styles.imageContainer}>
              <Image source={ require("../../assets/images/searchUrbani.png") } style={{ width: 160, height:140, resizeMode: 'contain'}}/>
            </View>
          </ServiceBox>

          <ServiceBox 
            title="픽업" 
            subtitle="준비가 완료된 상품을 픽업"
            option="list" 
            href="/passcode" 
            height={100}
          />
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // gap: 8,

    padding: 4,
  },
  imageContainer: {
  },
  passcodeContainer: {
    width: 200,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 8,
  },
  passcodeImageContainer: {
    backgroundColor: '#fff',
    width: '100%',
    // height: 50,
  }
})