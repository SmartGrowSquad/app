import Header from "@/components/header/Header";
import OrderComplete from "@/components/OrderComplete";
import { Body16, Caption, DefaultText, Title16, Title20, Title24 } from "@/components/StyledText";
import { useGetCropDetailQuery, useGetUrbaniInfoQuery, usePostPurchaseMutation } from "@/store/slices/apiSlice";
import { setLoading } from "@/store/slices/loadingSlice";
import { RootState } from "@/store/store";
import { UrbaniDto } from "@/store/types";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, TextInput, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function DetailScreen() {
  const { id } = useLocalSearchParams(); 
  const [amount, setAmount] = useState(1);
  const { currentData, isFetching, isError } = useGetCropDetailQuery(Number(id));
  const urbanQ = useGetUrbaniInfoQuery(Number(id));
  const [selectedBranch, setSelectedBranch] = useState<UrbaniDto | null>(null);
  const [showBranchList, setShowBranchList] = useState(true);
  const [orderComplete, setOrderComplete] = useState(false);
  const [order, { isLoading: isUpdating }] = usePostPurchaseMutation()
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  const isOrderCompletedStyle = () => selectedBranch ? 'orderComplete' : 'orderIncomplete';

  const handleOrder = () => {
    if(selectedBranch !== null) {
      setOrderComplete(true);
      order({
        acId: Number(id),
        amount: amount,
        memberId: user.id
      });

      dispatch(setLoading(true));
    }
  };

  useEffect(() => {
    if(loading) {
      console.log(currentData);
      setSelectedBranch(urbanQ.currentData!);
      dispatch(setLoading(false));
    }
  }, [loading]);
  return (
    orderComplete ? <OrderComplete /> :
    <View style={styles.container}>
      <Header back={() => router.back()} backgroundColor="#fff"/>
      <ScrollView>
        {/* 상품 이미지 */}
        <View style={styles.imageContainer}>
          <View style={styles.image}></View>
        </View>
          
        {/* info */}
        <View style={styles.infoContainer}> 
          <Title20>{currentData?.name}</Title20>
          <View style={styles.descContainer}>
            <Caption>{currentData?.description}</Caption>
          </View>
        </View>

        {/* price */}
   
        <Title20 style={styles.priceContainer}>{currentData?.price.toLocaleString()}원</Title20>
        

        {/* select address */}
        <View style={styles.searchUrbaniContainer}>
          <Title16>지점</Title16>
          <Title16>{urbanQ.currentData?.name}</Title16>
        </View>
          <View style={styles.orderSummaryContainer}>
            <View>
              <Title16>최종 주문정보</Title16>
              <View style={styles.finalOderInfoContainer}>
                <Caption>상추</Caption>
                <Caption>{amount}</Caption>
              </View>
          
            </View>
            <View style={styles.totalPayContainer}>
              <Title20>총 결제 금액</Title20>
              <Title24 style={styles.priceText}>{(currentData?.price! * amount).toLocaleString()}원</Title24>
            </View>
          </View>
        
      </ScrollView>

      <View style={[styles.orderButtonContainer, {
          bottom: 0,
        }]}>
          <View style={styles.orderButtonWrapper}>
            <View style={styles.countButtonContainer}>
              <Pressable onPress={() => setAmount(prev => Math.max(1, prev - 1))}><AntDesign name="minus" size={20} color="black" /></Pressable>
              <View>
                <DefaultText>{amount}</DefaultText>
              </View>
              <Pressable onPress={() => setAmount(prev => prev + 1)}><AntDesign name="plus" size={20} color="black" /></Pressable>
            </View>
            <Pressable style={styles[isOrderCompletedStyle()]} onPress={handleOrder}>
              <Title16>결제하기</Title16>
            </Pressable>
          </View>
        </View>
    </View>
  )
}
//#region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom:20
  },
  image: {
    height: 200,
    width: 200, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 8,
  },
  infoContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  descContainer: {
    marginTop: 16,  
    paddingLeft: 8,
    paddingRight: 8,
  },
  priceContainer: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'right',
  },
  countButtonContainer: {
    width: 120,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderButtonContainer: {
    // height: 56,
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    gap: 4,
  },
  orderButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 16,
  },
  orderComplete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#67AE6A",
    borderRadius: 8,  
    height: 56,
  },
  orderIncomplete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#67AE6A",
    borderRadius: 8,  
    height: 56,
    opacity: 0.5, 
  },

  searchUrbaniContainer: {
    padding: 16,
  },
  
  selectedBranchContainer: {
    flex: 1,
    gap: 8,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  orderSummaryContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },

  finalOderInfoContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalPayContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
  },
  priceText: {
    textAlign: 'right',
  },

  
});