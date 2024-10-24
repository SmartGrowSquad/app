import Header from "@/components/header/Header";
import { DefaultText, Title20 } from "@/components/StyledText";
import { useGetPurchasesQuery } from "@/store/slices/apiSlice";
import { setLoading } from "@/store/slices/loadingSlice";
import { RootState } from "@/store/store";
import { PurchaseDto } from "@/store/types";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, View, StyleSheet, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function PasscodeScreen() {
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const { currentData, isFetching, isError, refetch} = useGetPurchasesQuery(user.id)
  const [purchacedList, setPurchasedList] = useState<PurchaseDto[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch(); 

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  
  // 준비 중인 아이템은 뒤로 보내기
  const sortPurchasedList = (puchacedList: PurchaseDto[]) => {
    const readyList = puchacedList.filter((item) => item.status === 1);
    const unreadyList = puchacedList.filter((item) => item.status !== 1);
    return [ ...readyList, ...unreadyList];
  }

  const handlePressReadyItem = (purchacedItem: PurchaseDto) => {
    purchacedItem.status && router.push({ 
      pathname: `/passcode/modal`,
      params: { 
        purchaseId: purchacedItem.id,
        name: purchacedItem.name,
        address: purchacedItem.location,
        passcode: purchacedItem.passcode
      } 
    });
  }

  useEffect(() => {
    if (currentData) {
      setPurchasedList(sortPurchasedList(currentData));
    }
  }, [currentData]);

  return (
    <View style={styles.container}>
      <Header back={() => router.back()} title="픽업" backgroundColor="#fff"/>
      <ScrollView 
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
      }>
        {
          !isFetching && 
          <View style={styles.itemListContainer}>
            {
              purchacedList.length > 0 && purchacedList.map((purchaceItme, index) => {
                return (
                  <Pressable 
                    key={index} 
                    onPress={() => handlePressReadyItem(purchaceItme)}
                    style={styles[`itemContainer_${purchaceItme.status ? 'ready' : 'unready'}`]}
                  >
                    <DefaultText>{purchaceItme.name}</DefaultText>
                    <View>
                      <DefaultText>{purchaceItme.urbaniName}</DefaultText>
                    </View>
                    <DefaultText>{purchaceItme.location}</DefaultText>
                    <DefaultText>{purchaceItme.status ? "준비완료" : "준비중"}</DefaultText>
                  </Pressable>
                )
              })
            }
          </View>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  itemListContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  itemContainer_ready: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,

    backgroundColor: '#f4f4f4',
    borderRadius: 8,

    height: 100,
  },
  itemContainer_unready:{
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,

    backgroundColor: '#f4f4f4',
    borderRadius: 8,

    height: 100,
    opacity: 0.5
  }
});

