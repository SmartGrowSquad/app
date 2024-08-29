import { StyleSheet, View } from 'react-native'

export interface DefaultHeaderProps {
  left?: any;
  center?: any;
  right?: any;
  backgroundColor?: string;
}

export default function DefaultHeader(props: DefaultHeaderProps) {
  return (
    <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
      <View style={styles.wrapper}>
        <View>{props.left}</View>
        <View>{props.center}</View>
        <View>{props.right}</View>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({  
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 56,
    // flex: 1,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
});