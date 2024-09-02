import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Body14, Body16, Caption, DefaultText, Title20 } from '@/components/StyledText';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function HomeLayout() {
  const user = useSelector((state: RootState) => state.user);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  
  const onPressItem = (cb?: any) => {
    navigation.dispatch(DrawerActions.closeDrawer())
    cb()
  }
  return (
    <GestureHandlerRootView>
      <Drawer
        drawerContent={(props) => {
          return (
            <ScrollView style={[styles.drawerContainer, { marginTop: insets.top, }]}>
              {/* 사용자 정보  */}

              <Pressable 
                style={styles.drawerInfoContainer}
                onPress={() => onPressItem(() => router.navigate('/setting'))}
              >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                  <Title20>{user.name ? user.name : "로그인이 필요합니다."}</Title20>
                  <Ionicons name="settings-outline" size={24} color="#333" />
                </View>
                <Body14>{user.email}</Body14>
              </Pressable>

              <View>
                <DefaultText>{user.name}</DefaultText>
              </View>
              
              <View style={styles.subServiceContainer}>
                {/* 이용 내역 */}
                <Pressable onPress={() => onPressItem(() => router.navigate('/history'))}>
                  <Body16>이용내역</Body16>
                </Pressable>
              </View>
              
             
              <View style={styles.informationCenterContainer}>
                {/* 고객센터 */}
                <Pressable onPress={() => onPressItem()}>
                  <Caption>고객센터</Caption>
                </Pressable>
                
                {/* 공지사항 */}
                <Pressable onPress={() => onPressItem()}>
                  <Caption>공지사항</Caption>
                </Pressable>

                {/* 이용약관/개인정보 처리방침  */}
                <Pressable onPress={() => onPressItem()}>
                  <Caption>이용약관 / 개인정보 처리방침</Caption>
                </Pressable>
              </View>
            </ScrollView>
          )
      }}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerPosition: 'right',
          drawerStyle: styles.drawerStyle
        }}
      />
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  drawerContainer: {
    // padding: 16,
  },
  drawerStyle: {
    width: '83%',
  },
  drawerInfoContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 16
  },
  subServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  informationCenterContainer: {
    flexDirection: 'column',
    gap: 16,
    padding: 16,
    marginTop: 16,
  }
})