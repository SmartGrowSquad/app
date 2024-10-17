import Header from "@/components/header/Header";
import { router, Stack } from "expo-router";
import { View, StyleSheet} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Header cancel={() => router.back() }/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
      </Stack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})
