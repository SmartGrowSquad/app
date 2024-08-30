import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import { Image, Pressable, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

function onPressBars () {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) } }>
      <FontAwesome6 name="bars" size={24} color="black" />
    </Pressable>
  )
}
export default function HomeHeader() {
  const headerProps: DefaultHeaderProps = {
    left: <Image source={ require("../../assets/images/ugh_logo_3x.png") } style={styles.logo}/>,
    right: onPressBars(),
    backgroundColor: "#F4F5FB"
  }
  return DefaultHeader(headerProps);
}

const styles = StyleSheet.create({
  logo: {
    width: 24,
    height: 24,
  }
 });