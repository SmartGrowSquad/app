import { Stack } from "expo-router";
import { View, StyleSheet} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ServiceRootLayout() {
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
        <Stack.Screen name="[service]" options={{ headerShown: false }}/>
        <Stack.Screen name="detail/[id]" options={{ headerShown: false }}/>
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