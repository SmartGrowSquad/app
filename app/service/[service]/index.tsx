import Header from "@/components/header/Header";
import LocationView from "@/components/location/LocationView";
import ItemListView from "@/components/serivce/ItemListView";
import { Caption, DefaultText, Title16 } from "@/components/StyledText";
import { router, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function ServiceScreen() {
  const { service } = useLocalSearchParams();
  const dumyItems = [
    {
      'id': 1,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': 'url'
    },
    {
      'id': 2,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': 'url'
    },
    {
      'id': 3,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': null
    },
    {
      'id': 1,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': 'url'
    },
    {
      'id': 2,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': 'url'
    },
    {
      'id': 3,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': null
    },
    {
      'id': 1,
      'name': '상추',
      'subtitle':  'Lettuce',
      'imageUrl': 'url'
    },
  
  ]
  const title = service === 'findself' ? '직접찾기' : '배달';
  const itemView = (data: any) => 
    <View style={styles.itemContainer}>
      <View style={{
        width: 80,
        height: 80,
        backgroundColor: '#f0f0f0',
        borderRadius: 8
      }}>
        {data.imageUrl ? <DefaultText>이미지</DefaultText> : null}
      </View>
      
      <View>
        <Title16>{data.name}</Title16>
        <Caption>{data.subtitle}</Caption>
      </View>
    </View>
  return (
    <View style={styles.container}>
      <Header back={() => router.back()} title={title} backgroundColor="#fff"/>
      <LocationView/>
      <ItemListView items={dumyItems} itemView={itemView} url='service/detail'/>
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
  }
})
