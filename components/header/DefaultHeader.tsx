import { StyleSheet, View } from 'react-native'
import { Body16, Title20 } from '../StyledText';

export interface DefaultHeaderProps {
  left?: any;
  center?: string;
  right?: any;
  backgroundColor?: string;
}

export default function DefaultHeader(props: DefaultHeaderProps) {
  return (
    <View style={[styles.container, { 
      backgroundColor: props.backgroundColor ,
    }]}>
      <View style={styles.wrapper}>
        <Body16>{props.left}</Body16>
        <Title20>{props.center}</Title20>
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