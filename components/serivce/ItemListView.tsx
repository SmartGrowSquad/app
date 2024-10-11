import React from "react";
import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import { DefaultText } from "../StyledText";
import { Href, router } from "expo-router";

interface ServiceLayoutProps {
  items: Array<any>;
  itemView: (data: any) => React.ReactNode;
  url: string
}
export default function ItemListView({
  items,
  url,
  itemView
}: ServiceLayoutProps) {
  console.log(url)
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <DefaultText>카테고리</DefaultText>
      </View>
      <ScrollView style={{
        padding: 16,
        backgroundColor: '#fff',
        flexDirection: 'column',
        gap: 8,
      }}>
        {
          items.map((item: any, index: number) => 
            <Pressable key={index} onPress={() => router.navigate(`${url}/${item.id}` as Href<string>)}>
              {itemView(item)}
            </Pressable>
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',

  },
  categoryContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
    
  }
})