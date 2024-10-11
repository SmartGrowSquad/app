import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function PasscodeLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View 
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="[purchaseId]" options={{ headerShown: false }}/>
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