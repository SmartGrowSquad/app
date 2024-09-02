import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function SearchScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Header back={() => router.back()} backgroundColor="#fff"/>
      {/* <DefaultText>search</DefaultText> */}
      <MapView style={styles.map}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
