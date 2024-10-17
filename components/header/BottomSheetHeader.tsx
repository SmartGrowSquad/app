import { StyleSheet } from "react-native";
import { View } from "../Themed";

const BottonSheetHeader = ()  => (
  <View style={styles.container}>
    <View style={styles.bar}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 32,
    backgroundColor: '#fff',
    paddingTop: 16,

    alignItems: 'center',
  },
  bar: {
    backgroundColor: '#ebebeb',
    borderRadius: 4,
    height: 6,
    width: 50,
  }
});

export default BottonSheetHeader;

