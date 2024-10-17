import { Stack } from "expo-router";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function PasscodeLayout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="modal" 
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
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