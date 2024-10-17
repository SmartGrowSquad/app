import { Body16, Caption, Title20 } from "@/components/StyledText";
import { RootState } from "@/store/store";
import { router } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function SettingScreen() { 
  const user = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {/* 개인 정보 */}
        <View>
          <Title20>{auth.authenticated ? user.name : "로그인이 필요합니다."}</Title20>
          { auth.authenticated && <Caption>{user.email}</Caption>}
        </View>
        
        { 
          !auth.authenticated &&
          <View style={styles.authContainer}>
            <Pressable style={styles.authButton} onPress={() => router.navigate('/auth/signin')}>
              <Body16>로그인</Body16>
            </Pressable>
            <Pressable style={styles.authButton} onPress={() => router.navigate('/auth/signup')}>
              <Body16>회원가입</Body16>
            </Pressable>
          </View>
        }
        
      </View>
      {/* <View style={styles.infoContainer}>
        
        <View>
          <Title16>계정 관리</Title16>
        </View>
        <Pressable onPress={() => router.navigate('/setting/login')}>
          <DefaultText>비밀번호 재설정</DefaultText>
        </Pressable>
        <Pressable onPress={() => router.navigate('/login')}>
          <DefaultText>주소 관리</DefaultText>
        </Pressable>
      </View> */}
      <View>
        {
          auth.authenticated &&
          <Pressable onPress={() => {}}>
            <Body16>로그아웃</Body16>
          </Pressable>
        }
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  infoContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    gap: 20,
  },
  authContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    
  },
  authButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  }
});