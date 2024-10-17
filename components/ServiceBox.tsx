import { Pressable, StyleSheet, View } from "react-native"
import { Body16, Title20 } from "./StyledText"
import { Href, router } from "expo-router"

interface ServiceBoxProps {
  title?: string,
  subtitle?: string,
  href?: string | null
  children?: React.ReactNode,
  direction?: 'row' | 'column',
  option?: 'list',
  height?: number,
}

export function ServiceBox (props: ServiceBoxProps) {
  return (
    <Pressable style={[styles.serviceBoxContainer, {
      flexDirection: props.direction,
      height: props.direction === 'row' ? 
          204
        : 
          props.height ? props.height : 204 ,
      justifyContent: props.option === 'list' ? undefined : 'space-between',
      
    }]} onPress={() => {props.href && router.navigate(props.href as Href<string>)}}>
      <View style={styles.serviceBoxWrapper}>
        {props.title && <Title20>{props.title}</Title20>}
        {props.subtitle && <Body16>{props.subtitle}</Body16>}
      </View>
      {props.children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  serviceBoxContainer: {
    // height: 204,
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  serviceBoxWrapper: {
  }
  
})