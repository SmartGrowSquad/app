import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AuthRootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }}/>
        <Stack.Screen name="signup" options={{ headerShown: false }}/>
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