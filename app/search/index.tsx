import Header from "@/components/header/Header";
import { Body16, DefaultText } from "@/components/StyledText";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Pressable, View } from "react-native";
import { StyleSheet } from 'react-native';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';

import * as Location from 'expo-location';
import CustomMarker from "@/components/CustomMarker";
import MarkerModal from "@/components/MarkerModal";
import { UrbaniDto } from "@/store/types";
import { useGetUrbaniInfoQuery, useGetUrbanisQuery } from "@/store/slices/apiSlice";

export default function SearchScreen({...props}) {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedUrbani, setSelectedUrbani] = useState<UrbaniDto | null>(null);
  const { currentData, isFetching, isError } = useGetUrbanisQuery(
    { latitude: location?.latitude!, longitude: location?.longitude! },
    { skip: !location } // location이 null이면 쿼리를 건너뜀
  )
  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView | null>(null);

  const [region, setRegion] = useState<LatLng>({
    latitude: 37.489616,
    longitude: 126.894123
  });
  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  const moveMapView = (coordinate: LatLng) => {
    mapRef.current?.animateToRegion({
      ...coordinate,
      latitudeDelta: 0.01,
      longitudeDelta: 0.02
    });
  }
  const handlePressMarker = (urbani: any, coordinate: LatLng) => {
    moveMapView({
      ...coordinate,
      latitude: coordinate.latitude - 0.01
    });

    setSelectedUrbani(urbani);

    bottomSheetRef.current?.expand();
  }
  const handlePressMyLocation = () => {
    moveMapView(region)
  }


  const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={1}
        pressBehavior="close"
        opacity={0}
			/>
		),
		[]
	);
  useEffect(() => {
    (async () => {
      if(!isFetching) {
        console.log("[ done ]"+currentData);
        console.log("[ done ]"+currentData);
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      // 현재 위치
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);  
      // 현재 위치 확인 이후 주변 어반이 검색
      setLocation(location.coords);
      console.log("[ currentData ]"+ currentData);
      // 타입 변경 후 저장
      const region: LatLng = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }

      setRegion(region);
    })();
  }, [isFetching]);
  
  return (
    <View style={styles.container}>
      <Header back={() => router.back()} backgroundColor="#fff"/>
      {/* <DefaultText>search</DefaultText> */}
      <MapView 
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          ...region,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0922
        }}
        showsMyLocationButton={false}
        followsUserLocation
        showsUserLocation
        userInterfaceStyle="light"
      >
        {
          currentData && currentData?.map((urbani: UrbaniDto, index) => (
            <CustomMarker 
              key={index}
              coordinate={urbani.latLong} 
              onPress={() => handlePressMarker(urbani, urbani.latLong)}
            />
          ))
        }
      </MapView>
      {/* my location */}
      <Pressable style={styles.myLocationButtonContainer} onPress={handlePressMyLocation}>
        <Body16>내 위치</Body16>
      </Pressable>

      {/* modal */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        onChange={handleSheetChanges}
        snapPoints={['50%']}
        backdropComponent={renderBackdrop}
        style={styles.bottomSheetModalContainer}
      >
        <BottomSheetView>
          { 
            selectedUrbani && 
            <MarkerModal 
              urbani={selectedUrbani}
              {...props} 
              close={() => bottomSheetRef.current?.close()}
            /> 
          }
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

//#region  styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  myLocationButtonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    // height: 40,
    // width: 40,  
  },
  bottomSheetModalContainer: {
    // flex:1,
  }
})
