import React, { useEffect } from "react";
import { Pressable, ScrollView, View, StyleSheet } from "react-native";
import { DefaultText } from "../StyledText";
import { Href, router } from "expo-router";
import CategoryBar from "./CategoryBar";

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
  const [categories, setCategories] = React.useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');

  useEffect(() => {
    const data = [
      "채소",
      "허브",
    ]
    setCategories(data)
    setSelectedCategory(data[0]);
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <CategoryBar 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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