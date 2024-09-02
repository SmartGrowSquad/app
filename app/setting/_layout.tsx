import Header from "@/components/header/Header";
import { router, Stack } from "expo-router";
import { View, StyleSheet} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
    }]}>
      <Header cancel={() => router.back() }/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
      </Stack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})
