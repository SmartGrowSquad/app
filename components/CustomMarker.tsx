import { Image, StyleSheet, View } from "react-native";
import { LatLng, MapMarkerProps, Marker } from "react-native-maps";

interface CustomMarkerProps extends MapMarkerProps {
  coordinate: LatLng;
} 

export default function CustomMarker({
  coordinate,
  ...props
}: CustomMarkerProps) {

  return (
    <Marker coordinate={coordinate} {...props}>
      <Image
        source={require('../assets/images/map_marker_x3.png')}
        style={styles.image}
      />
    </Marker>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
})