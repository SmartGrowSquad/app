import { Caption, DefaultText, Title16, Title20 } from "@/components/StyledText";
import { router } from "expo-router";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function SettingScreen() { 
  const user = useSelector((state: any) => state.user);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* 개인 정보 */}
        <Title20>{user.name ? user.name : "로그인이 필요합니다."}</Title20>
        <Caption>{user.email}</Caption>
        
          {!user.name &&
            <View style={styles.authContainer}>
              <Pressable style={styles.authButton} onPress={() => router.navigate('/auth/signin')}>
                <DefaultText>로그인</DefaultText>
              </Pressable>
              <Pressable style={styles.authButton} onPress={() => router.navigate('/auth/signup')}>
                <DefaultText>회원가입</DefaultText>
              </Pressable>
            </View>
          }
        
      </View>
      <View style={styles.infoContainer}>
        {/* 개인 정보 */}
        <View>
          <Title16>계정 관리</Title16>
        </View>
        <Pressable onPress={() => router.navigate('/login')}>
          <DefaultText>비밀번호 재설정</DefaultText>
        </Pressable>
        <Pressable onPress={() => router.navigate('/login')}>
          <DefaultText>주소 관리</DefaultText>
        </Pressable>
      </View>
      <View>
        {
          user.name &&
          <Pressable onPress={() => {}}>
            <DefaultText>로그아웃</DefaultText>
          </Pressable>
        }
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  infoContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  authContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  authButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});