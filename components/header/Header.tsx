import { Pressable } from "react-native";
import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "expo-router";

const test = (onPressLeft: any): React.JSX.Element => 
  <Pressable onPress={onPressLeft}>
    <AntDesign name="arrowleft" size={24} color="black" />
  </Pressable>

export default function Header() {
  const navigation = useNavigation();

  const headerProps: DefaultHeaderProps = {
    left: test(() => navigation.goBack()),
    center: "test"
  }
  return DefaultHeader(headerProps);
}