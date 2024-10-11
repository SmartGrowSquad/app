import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SearchScreen() {
  const navigation = useNavigation();
  const initialRegion = {
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };
  return (
    <View style={styles.container}>
      <Header back={() => router.back()} backgroundColor="#fff"/>
      {/* <DefaultText>search</DefaultText> */}
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
      </MapView>

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
