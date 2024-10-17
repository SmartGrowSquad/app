import BottomSheetHeader from "@/components/header/BottomSheetHeader";
import Header from "@/components/header/Header";
import QrFactory from "@/components/QrFactory";
import { Body16, Caption, DefaultText, Title16, Title20 } from "@/components/StyledText";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CryptoJS from "crypto-js";

export default function QrModal() {
  const params = useLocalSearchParams();  
  const key = '1';
  console.log(params);

  const convertToEncryptedCode = (value: string) => {
    const encrypt = CryptoJS.AES.encrypt(value, key).toString();
    const decrypted_bytes = CryptoJS.AES.decrypt(encrypt, key)
    const decrypt = decrypted_bytes.toString(CryptoJS.enc.Utf8)

    return encrypt;
  }
  return (
    <View style={styles.container}>
      <BottomSheetHeader/>

      <View style={styles.contentContainer}>
        
        <View style={styles.purchaceInfo}>
          <Title20>구매 정보</Title20>

          <View style={styles.purchaceInfoDetail}>

            <View style={styles.info}>
              <Caption>구매 목록</Caption>
              <Body16>{params.name as string}</Body16>
            </View>
            <View style={styles.info}>
              <Caption>주소</Caption>
              <Body16>{params.address as string}</Body16>
            </View>
            <View style={styles.passcode}>
              <Caption>확인코드</Caption>
              <Caption>{params.passcode as string}</Caption>
            </View>
          </View>
        </View>

        <QrFactory value={params.purchaseId as string}/>
      </View>
      
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  },

  purchaceInfo: {
    width: '100%',
    alignContent: 'center',
    justifyContent:'flex-start',
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 16,
    gap: 20
  },
  purchaceInfoDetail: {
    // flex: 1,
    // width: '100%',
    gap: 8
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  passcode: {
    flexDirection: 'column',
    gap: 4, 
    paddingTop: 8,
  }
})