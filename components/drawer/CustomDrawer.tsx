import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Pressable, View, StyleSheet } from "react-native";
import { Title20, Body14, DefaultText, Body16, Caption } from "../StyledText";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


interface CustomDrawerProps {
  onPressItem?: any;
  insets?: any;
}

export default function CustomDrawer({
  onPressItem,
  insets
}: CustomDrawerProps) {
  const user = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <ScrollView style={[styles.drawerContainer, { marginTop: insets.top, }]}>
      {/* 사용자 정보  */}

      <Pressable 
        style={styles.drawerInfoContainer}
        onPress={() => onPressItem(() => router.navigate('/setting'))}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          {
            auth.authenticated ?
              <View>
                <Title20>{user.name}</Title20>
                <Body14>{user.email}</Body14>
              </View>
            :
              <Title20>로그인이 필요합니다.</Title20>
          }
          
          <Ionicons name="settings-outline" size={24} color="#333" />
        </View>
    
      </Pressable>
      
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
}
const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#fff',
    // padding: 16,
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
    marginTop: 16
  },
  informationCenterContainer: {
    flexDirection: 'column',
    gap: 16,
    padding: 16,
    marginTop: 16,
  }
})