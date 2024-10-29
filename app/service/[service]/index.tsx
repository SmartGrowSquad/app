import Header from "@/components/header/Header";
import LocationView from "@/components/location/LocationView";
import ItemListView from "@/components/serivce/ItemListView";
import { Caption, DefaultText, Title16, Title20 } from "@/components/StyledText";
import { useGetAllCropsQuery } from "@/store/slices/apiSlice";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function ServiceScreen() {
  const { service } = useLocalSearchParams();
  const { currentData, isFetching, isError } = useGetAllCropsQuery(null); 
  const title = service === 'findself' ? '직접찾기' : '배달';
  useEffect(() => {
    if(!isFetching) {
      console.log(currentData);
    }
  }, [isFetching]);
  const itemView = (data: any) => 
    <View style={styles.itemContainer}>
      <View style={{
        width: 80,
        height: 80,
        backgroundColor: '#f0f0f0',
        borderRadius: 8
      }}>
        <Image source={require("../../../assets/images/lettuce.png")} style={styles.image}/>
      </View>
      
      <View>
        <Title16>{data.name}</Title16>
        <Caption>{data.description}</Caption>
        <Title20>{data.price.toLocaleString()}원</Title20>
      </View>
    </View>
  return (
    <View style={styles.container}>
      <Header back={() => router.back()} title={title} backgroundColor="#fff"/>
      {currentData && <ItemListView items={currentData} itemView={itemView} url='service/detail'/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  itemContainer: {
    backgroundColor: '#fff',  
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,

    flexDirection: 'row',
    gap: 16
  }, 
  image: {
    width: 80,
    height: 80,
    borderRadius: 8
  }
})
