import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from 'react-native';

export default function UrbaniScreen() {
  const { service } = useLocalSearchParams();
  const navigation = useNavigation();
  
  const title = service === 'findself' ? '직접찾기' : '배달';

  return (
    <View>
      <Header back={() => navigation.goBack()} title={title}/>
      <ScrollView>
        <DefaultText>service name: {service}</DefaultText>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})