import { Pressable, View } from "react-native";
import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Body16 } from "../StyledText";

function leftPressable(onPress: () => any, title?: string): React.JSX.Element {
  return (
    <View>
      <Pressable onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Body16>{title}</Body16>
    </View>
  )
}
export default function Header(navigation: any, title?: string) {
 

  const headerProps: DefaultHeaderProps = {
    left: leftPressable(() => navigation.goBack(), title),
  }
  return DefaultHeader(headerProps);
}