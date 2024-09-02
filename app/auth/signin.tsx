import Header from "@/components/header/Header";
import { Caption, DefaultText } from "@/components/StyledText";
import { useSigninMutation } from "@/store/slices/apiSlice";
import { router } from "expo-router";
import { useState } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";

export default function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signin] = useSigninMutation()
  // 이메일 검증 로직

  // signin
  const onPressSingin = async () => {
    try {
      await signin({email, password})
      // 로그인 성공 시 홈으로 리디렉션
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View style={styles.container}>
      <Header cancel={() => router.back()} center="로그인"/>
      <View style={{
        flexDirection: 'column',
        gap: 8,
        padding: 16
      }}>
        <TextInput  style={styles.inputContainer} placeholder="Email" onChangeText={setEmail} value={email}/>
        <TextInput style={styles.inputContainer} placeholder="Password" onChangeText={setPassword} value={password}/>
      </View>
      <View
        style={{
          flexDirection: 'column',
          gap: 8,
          padding: 16
        }}>
        <Pressable style={styles.signinButtonContainer} onPress={onPressSingin}>
          <DefaultText >로그인</DefaultText>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            padding: 16
          }}
        >
          <Caption>아직 회원이 아니신가요?</Caption>
          <Pressable>
            <DefaultText onPress={() => router.navigate('/auth/signup')}>회원가입</DefaultText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    paddingLeft:  16,
    paddingRight:  16,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
  },
  signinButtonContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: "#67AE6A",
    borderRadius: 8,
    alignItems: 'center',
  }
})