import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import CustomDrawer from '@/components/drawer/CustomDrawer';

export default function HomeLayout() {
  
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  
  const onPressItem = (cb?: any) => {
    navigation.dispatch(DrawerActions.closeDrawer())
    cb()
  }
  return (
    <GestureHandlerRootView>
      <Drawer
        drawerContent={(props) => {
          return (
            <CustomDrawer onPressItem={onPressItem} insets={insets}/>
          )
      }}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerPosition: 'right',
          drawerStyle: styles.drawerStyle,
        }}
      />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  drawerStyle: {
    width: '83%',
  },
})