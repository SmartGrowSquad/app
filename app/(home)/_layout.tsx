import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

export default function HomeLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerPosition: 'right',
          drawerStyle: styles.drawerStyle
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  drawerStyle: {
    width: '88%',

  }
})