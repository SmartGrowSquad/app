import HomeHeader from "@/components/header/HomeHeader";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function HomeLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          header: HomeHeader,
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerPosition: 'right',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}