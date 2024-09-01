import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function SearchScreen() {
  const { service } = useLocalSearchParams();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  
  return (
    <View>
      <Header back={() => navigation.goBack()} backgroundColor="#fff"/>
      <ScrollView>
        <DefaultText>Search</DefaultText>
        
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
})
