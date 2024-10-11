import Header from "@/components/header/Header";
import { Body16, Caption, DefaultText, Title16, Title20, Title24 } from "@/components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, TextInput, Image } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();  
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [showBranchList, setShowBranchList] = useState(true);
  const [orderComplete, setOrderComplete] = useState(false);
  const branches = [
    { id: 1, name: "어반팜 강남점", address: "서울시 강남구 테헤란로 123" },
    { id: 2, name: "어반팜 역삼점", address: "서울시 강남구 역삼로 456" },
    { id: 3, name: "어반팜 선릉점", address: "서울시 강남구 선릉로 789" },
    { id: 4, name: "어반팜 삼성점", address: "서울시 강남구 삼성로 101" },
  ];

  const handleBranchSelect = (branch: any) => {
    if (selectedBranch?.id === branch.id) {
      setSelectedBranch(null);
      setShowBranchList(true);
    } else {
      setSelectedBranch(branch);
      setShowBranchList(false);
    }
  };
  const handleOrder = () => {
    setOrderComplete(true);
  };
  
  if (orderComplete) {
    return (
      <View style={styles.container}>
        <Header cancel={() => router.replace("/")} backgroundColor="#fff" />
        <View style={styles.orderCompleteContainer}>
          <Image source={ require("../../../assets/images/findself_3x.png") } style={{ width: 160, height:140, resizeMode: 'contain'}}/>
          <Title20>주문이 완료되었어요!</Title20>
          <Caption>준비가 완료되면 알려드릴게요!</Caption>
          <Caption>평균 5분 정도 소요돼요.</Caption>
        </View>
        <View style={[styles.viewOrderButtonContainer,  {
          bottom: insets.bottom,
        }]}>
          <View style={styles.viewOrderorderButtonWrapper}>
            <Pressable style={styles.viewOrderButton} 
              onPress={() => router.push("/passcode")}
            >
              <Title16>구매 내역 보기</Title16>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header back={() => router.back()} backgroundColor="#fff"/>
      <ScrollView>
        {/* 상품 이미지 */}
        <View style={styles.imageContainer}>
          <View style={styles.image}></View>
        </View>
          
        {/* info */}
        <View style={styles.infoContainer}> 
          <Title20>상추</Title20>
          <Caption>Lettuce</Caption>
          <View style={styles.descContainer}>
            <Caption>모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.</Caption>
          </View>
        </View>

        {/* price */}
   
        <Title20 style={styles.priceContainer}>4,000원</Title20>
        

        {/* select address */}
        <View style={styles.searchUrbaniContainer}>
          <Title16>지점 선택</Title16>
          <View>
            {/* input bar */}
            {showBranchList && (
              <TextInput 
                editable
                placeholder="지점 검색" 
                onChangeText={setSearch}
                value={search}
                style={styles.inputContainer}
              />
            )}
            {/* 지점 리스트 출력 */}
            {showBranchList ? (
              <ScrollView nestedScrollEnabled style={styles.searchItemListContainer}>
                {branches
                  .filter(branch => branch.name.includes(search) || branch.address.includes(search))
                  .map(branch => (
                    <Pressable key={branch.id} style={styles.searchItemContainer} onPress={() => handleBranchSelect(branch)}>
                      <View style={styles.searchItemWrapper}>
                        {/* image */}
                        <View style={styles.searchImage}></View>
                        <View>
                          <Body16>{branch.name}</Body16>
                          {/* address */}
                          <Caption>{branch.address}</Caption>
                        </View>
                      </View>
                    </Pressable>
                  ))}
              </ScrollView>
            ) : (
              selectedBranch && (
                <Pressable style={styles.selectedBranchContainer} onPress={() => setShowBranchList(true)}>
                  <View style={styles.searchItemWrapper}>
                    <View style={styles.searchImage}></View>
                    <View>
                      <Body16>{selectedBranch.name}</Body16>
                      <Caption>{selectedBranch.address}</Caption>
                    </View>
                  </View>
                </Pressable>
              )
            )}
          </View>
        </View>

        {/* order button */}
        {selectedBranch && (
          <View style={styles.orderSummaryContainer}>
            <View>
              <Title16>최종 주문정보</Title16>
              <View style={styles.finalOderInfoContainer}>
                <Caption>상추</Caption>
                <Caption>{amount}</Caption>
              </View>
              {/*  */}
            </View>
            <View style={styles.totalPayContainer}>
              <Title20>총 결제 금액</Title20>
              <Title24 style={styles.priceText}>{4000 * amount}원</Title24>
            </View>
            
          </View>
        )}
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
            <Pressable style={styles.orderButton} onPress={handleOrder}>
              <Title16>결제하기</Title16>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

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
  orderButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#67AE6A",
    borderRadius: 8,  
    height: 56,
  },
  searchUrbaniContainer: {
    padding: 16,
  },
  inputContainer: {
    width: '100%',
    paddingLeft:  16,
    paddingRight:  16,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
  },
  searchItemListContainer: {
    overflow: 'hidden',
    height: 300,
  }, 
  searchItemContainer: {
    flex: 1,
    gap: 8,
    padding: 8,

  },
  searchItemWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  searchImage:{
    height: 80,
    width: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
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
});