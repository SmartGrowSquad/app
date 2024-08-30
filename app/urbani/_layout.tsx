import { Stack } from "expo-router";

export default function UrbaniLayout() {
  return (
    <Stack>
      <Stack.Screen name="[service]" options={{ headerShown: false }}/>
    </Stack>
  )
}