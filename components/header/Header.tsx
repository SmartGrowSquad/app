import { Pressable, StyleSheet, View } from "react-native";
import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Body16, Title16 } from "../StyledText";

function leftPressable(onPress: () => any, title?: string): React.JSX.Element {
  return (
    <View style={styles.leftPressableContainer}>
      <Pressable onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Title16>{title}</Title16>
    </View>
  )
}
export default function Header({back, title}:{back: any, title?: string}) {
  const headerProps: DefaultHeaderProps = {
    left: leftPressable(back, title),
  }
  return DefaultHeader(headerProps);
}

const styles = StyleSheet.create({
  leftPressableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8  
  }
})