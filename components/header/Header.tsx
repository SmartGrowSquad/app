import { Pressable, StyleSheet, View } from "react-native";
import DefaultHeader, { DefaultHeaderProps } from "./DefaultHeader";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Body16, Title16 } from "../StyledText";
import { Fragment } from "react";

function leftPressable(onPress: () => any, title?: string): React.JSX.Element {
  if(onPress === undefined) return <Fragment></Fragment>
  return (
    <View style={styles.leftPressableContainer}>
      <Pressable onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Title16>{title}</Title16>
    </View>
  )
}

function rightPressable(onPress: () => any): React.JSX.Element {
  if(onPress === undefined) return <Fragment></Fragment>
  return (
    <View style={styles.leftPressableContainer}>
      <Pressable onPress={onPress}>
        <Feather name="x" size={24} color="#333" />
      </Pressable>
    </View>
  )
}

export default function Header({
  back, 
  title,
  backgroundColor, 
  cancel, 
  center
}:{
  back?: any, 
  title?: string, 
  backgroundColor?: string, 
  cancel?: any, 
  center?: string
}) {
  const headerProps: DefaultHeaderProps = {
    left: leftPressable(back, title),
    center: center,
    right: rightPressable(cancel),
    backgroundColor: backgroundColor
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