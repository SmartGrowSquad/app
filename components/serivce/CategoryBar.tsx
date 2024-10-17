import { Pressable, StyleSheet, View } from "react-native";
import { Title20 } from "../StyledText";

interface CategoryBarProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}
export default function CategoryBar({
  categories,
  selectedCategory,
  setSelectedCategory
}: CategoryBarProps) {
  return (
    <View style={styles.container}>
      {
        categories.map((category, index) =>
          <Pressable 
            key={index}
            onPress={() => setSelectedCategory(category)}
            style={
              styles[selectedCategory === category ? 
                'selectedCotegoryItem' 
              : 
                'item'
            ]}
          >
            <Title20>
              {category}
            </Title20>
          </Pressable>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  selectedCotegoryItem: {
    borderBottomWidth: 3,
    borderBottomColor: '#333',
    padding:4
  },
  item: {
    opacity: 0.5,
    padding:4
  }
})