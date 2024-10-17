import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native"
import QRCode from 'react-native-qrcode-svg';
import Timer from "./Timer";

interface QrFactoryProps {
  value: string
}
export default function QrFactory({
  value
}: QrFactoryProps) {
  const [timeOut, setTimeout] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(value);
  const duration = 3;

  // QR 코드 생성 로직
  const GenerateNewQRCode = () => {
    setTimeout(true)
  };

  useEffect(() => {
    if(timeOut) {
      setQrCodeData("ff");
      setTimeout(false);
    }
  }, [timeOut]);
  
  return (
    <View style={styles.qrCodeContainer}>
      
      <View style={styles.qrContainer}>
        <View style={styles.qrcode}>
          <QRCode 
            value={qrCodeData}
            size={240}
          />
          {/* <View style={styles.timerContainer}>
            <Timer duration={duration} OnTimeExpire={GenerateNewQRCode}/>
          </View> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  qrCodeContainer: {
    gap: 20,
  },
  qrContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#91EE94',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrcode:{
    width: 240,
    height: 240,
    backgroundColor: '#fff',
  },
  timerContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
})