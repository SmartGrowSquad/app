import Header from "@/components/header/Header";
import { DefaultText } from "@/components/StyledText";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from 'react-native';

export default function UrbaniScreen() {
  const { service } = useLocalSearchParams();
  const navigation = useNavigation();
  return (
    <View>
      <Header back={() => navigation.goBack()} title="Urbani"/>
      <ScrollView>
        <DefaultText>service name: {service}</DefaultText>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})