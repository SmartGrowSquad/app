import { router } from "expo-router";
import { Pressable, StyleSheet, View, Image, SafeAreaView } from "react-native";
import { Title20, Caption, Title16 } from "./StyledText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "./header/Header";
import { useDispatch } from "react-redux";
import { resetSelectedBranch } from "@/store/slices/selectBranchSlice";

export default function OrderComplete() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const handleOnPressCompleteOrderButton = () => {
    router.replace("/passcode");
    dispatch(resetSelectedBranch())
  }
  return (
    <View style={styles.container}>
      <Header cancel={() => router.replace("/")} backgroundColor="#fff" />
      <View style={styles.orderCompleteContainer}>
        <Image 
          source={ require("../assets/images/findself_3x.png") } 
          style={{ width: 160, height:140, resizeMode: 'contain'}}
        />
        <Title20>주문이 완료되었어요!</Title20>
        <Caption>준비가 완료되면 알려드릴게요!</Caption>
        <Caption>평균 5분 정도 소요돼요.</Caption>
      </View>
      <View style={[styles.viewOrderButtonContainer,  {
        bottom: insets.bottom,
      }]}>
        <View style={styles.viewOrderorderButtonWrapper}>
          <Pressable style={styles.viewOrderButton} 
            onPress={handleOnPressCompleteOrderButton}
          >
            <Title16>구매 내역 보기</Title16>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  orderCompleteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  orderCompleteImage: {
    height: 100,
    width: 100,
    backgroundColor: '#67AE6A',
    borderRadius: 8,
    marginBottom: 16,
  },
  viewOrderButtonContainer: {
    height: 56,
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,

    marginBottom: 16,
  },
  viewOrderorderButtonWrapper: {
    flex: 1,
    padding: 16,
  },
  viewOrderButton: {
    // flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#67AE6A",
    borderRadius: 8, 
  }
})
