import { Modal, View, StyleSheet, Pressable, Platform, ScrollView, Image, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Body16, Caption, Title16, Title20 } from "./StyledText";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { CropDto, UrbaniDto } from "@/store/types";

interface MarkerModalProps {
  urbani: UrbaniDto;
  close: () => void;
}
export default function MarkerModal({
  urbani,
  close,
  ...props
}: MarkerModalProps) {
  console.log(urbani);
  const handleOnPressCrop = (cropId: number) => {
    router.push(`/service/detail/${cropId}`);
    close();
  }

  return (
    <View style={styles.container}>
      <View>
        <Title20>{urbani.name}</Title20>
        <Body16>{urbani.location}</Body16>
      </View>
      <View style={styles.cardContainer}>
        <Body16>가능한 작물</Body16>
        {
          urbani.availableCrop.length > 0 ?
          <FlatList
            data={urbani.availableCrop}
            // keyExtractor={(item: CropDto, index) => index}
            renderItem={({ item }) => (
              <Pressable 
                style={styles.cropContainer}
                onPress={() => handleOnPressCrop(item.id)}
              >
                <Image
                  source={require("../assets/images/lettuce.png")}
                  style={{ width: 60, height: 60, resizeMode: 'contain'}}
                />
                <View style={styles.cropInfoContainer}>
                  <Title20>{item.name}</Title20>
                  <Body16>{item.price.toLocaleString()}원</Body16>
                </View>
              </Pressable>
            )}
          />
          :
          <View>
            <Caption>등록된 작물이 없습니다.</Caption>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    gap: 20,
    // marginBottom: 50,
  },
  wrapper: {
    gap: 8,

    paddingBottom: 50,
  },
  cardContainer: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 8,
    height: 300,
  },
  cropContainer: {
    padding: 8,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    flexDirection: 'row', 
    gap: 8,
    marginBottom: 8,
  },
  cropInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8
  }
})