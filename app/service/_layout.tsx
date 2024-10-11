import { Stack } from "expo-router";
import { Fragment } from "react";
import { View, StyleSheet, SafeAreaView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ServiceRootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Fragment>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView
        style={[
          styles.container,
        ]}>
        <Stack>
          <Stack.Screen name="[service]" options={{ headerShown: false }}/>
          <Stack.Screen name="detail/[id]" options={{ headerShown: false }}/>
        </Stack>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#fff',
  }
})