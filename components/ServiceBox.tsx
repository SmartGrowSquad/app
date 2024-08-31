import { Pressable, StyleSheet, View } from "react-native"
import { Body16, Title20 } from "./StyledText"
import { Href, router } from "expo-router"

interface ServiceBoxProps {
  title?: string,
  subtitle: string,
  href?: Href<string> | null
}

export function ServiceBox (props: ServiceBoxProps) {
  return (
    <Pressable style={styles.serviceBoxContainer} onPress={() => {props.href && router.navigate(props.href)}}>
      <View style={styles.serviceBoxWrapper}>
        <Title20>{props.title}</Title20>
        <Body16>{props.subtitle}</Body16>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({

  serviceBoxContainer: {
    height: 204,
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  serviceBoxWrapper: {
    height: '100%',
  }
})