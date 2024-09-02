import { RootState } from "@/store/store"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import { Title16 } from "../StyledText"

// 사용자의 위치를 표시하거나 설정할 수 있는 컴포넌트
export default function LocationView() {
  const user = useSelector((state: RootState) => state.user)

  return (
    <View style={styles.container}>
      { user.location === null ? <Title16>위치를 설정해주세요</Title16> : <Title16>{user.location}</Title16> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  }
})